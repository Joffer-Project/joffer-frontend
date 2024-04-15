import React from 'react'
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

    const talentStore = useTalent();
    type FormValues = z.infer<typeof schema>;

    const defaultValues: FormValues = {
        industries: talentStore.formData.industries || [],
    };

    const industries = [
        { id: "finance", label: "Finance" },
        { id: "healthcare", label: "Healthcare" },
        { id: "technology", label: "Technology" },
        { id: "education", label: "Education" },
        { id: "real-estate", label: "Real Estate" },
        { id: "manufacturing", label: "Manufacturing" },
        { id: "retail", label: "Retail" },
        { id: "automotive", label: "Automotive" },
        { id: "construction", label: "Construction" },
        { id: "entertainment", label: "Entertainment" },
        { id: "media", label: "Media" },
        { id: "telecommunications", label: "Telecommunications" },
        { id: "transportation", label: "Transportation" },
        { id: "utilities", label: "Utilities" },
        { id: "agriculture", label: "Agriculture" },
        { id: "food", label: "Food" },
        { id: "hospitality", label: "Hospitality" },
        { id: "tourism", label: "Tourism" },
        { id: "sports", label: "Sports" },
        { id: "non-profit", label: "Non-Profit" },
        { id: "government", label: "Government" },
        { id: "other", label: "Other" },
    ];


    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            talentStore.setState({ formData: { ...talentStore.formData, ...data } });
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setStep(3);
        }
    };

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
                                    {industries.map((item) => (
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
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value: string) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className={`border-2 rounded-[40px] !mt-0 px-[30px] py-[14px] border-[#FF7E33] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${field.value?.includes(item.id) ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]" : "text-[#FF7E33]"}`}>
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
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
