import React, { useEffect, useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import useTalent from '@/hooks/talent-store';
import { Industry } from '@/types';
import { getIndustries } from '@/actions/industry';

const schema = z.object({
    industries: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
});


interface IndustriesProps {
    setStep: (step: number) => void;
}

const Industries: React.FC<IndustriesProps> = ({
    setStep
}) => {

    const [data, setData] = useState<Industry[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const talentStore = useTalent();
    
    type FormValues = z.infer<typeof schema>;
    const defaultValues: FormValues = {
        industries: talentStore.getState().selectedIndustries,
    };

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const fetchedData: Industry[] = await getIndustries();
                setData(fetchedData);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            talentStore.setState({ selectedIndustries: data.industries });
            // console.log(talentStore.getState().selectedIndustries);
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setStep(3);
        }
    };

    if (isLoading) {
        return <p className='text-center w-full'>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Industries</h2>
            <p className="font-medium text-xl mb-6">Select the industries that align best with your interests, knowledge, experience, and wishes. </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="max-h-[200px] overflow-y-auto">
                        <FormField
                            control={form.control}
                            name="industries"
                            render={() => (
                                <FormItem className="flex flex-wrap gap-2 justify-center items-center px-2">
                                    <FormMessage className='w-full text-center -mt-2 text-lg' />
                                    {data?.length && data.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="industries"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex items-center !mt-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                className="hidden"
                                                                checked={field.value?.includes(item.id.toString())}
                                                                onCheckedChange={(checked) => {
                                                                    if (checked) {
                                                                        field.onChange([...(field.value || []), item.id.toString()]);
                                                                    } else {
                                                                        field.onChange(field.value?.filter((value) => value !== item.id.toString()));
                                                                    }
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className={`border-2 rounded-[40px] !mt-0 px-[30px] py-[14px] border-[#FF7E33] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${field.value?.includes(item.id.toString()) ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]" : "text-[#FF7E33]"}`}>
                                                            {item.name}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-between items-center pt-8">
                        <Button
                            onClick={() => setStep(1)}
                            className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg"
                        >
                            <ChevronLeft /> Back
                        </Button>
                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <span className="text-[#FF7E33]">2</span>/5
                            </p>
                        </div>
                        <Button type="submit" className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
                            Next <ChevronRight />
                        </Button>

                    </div>
                </form>
            </Form >
        </>
    );
};

export default Industries;
