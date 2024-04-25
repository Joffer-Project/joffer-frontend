import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import useRecruiter from '@/hooks/recruiter-store';

const schema = z.object({
    name: z.string().min(3).max(100),
});

interface EssentialsProps {
    setStep: (step: number) => void;
}

const Essentials: React.FC<EssentialsProps> = (
    { setStep }
) => {
    const recruiterStore = useRecruiter();
    type FormValues = z.infer<typeof schema>;

    const defaultValues: FormValues = {
        name: recruiterStore.formData.name || "",
    };

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            recruiterStore.setState({ formData: { ...recruiterStore.formData, ...data } });
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setStep(2);
        }
    };

    return (
        <>
            <h2 className="font-normal text-4xl bg-gradient-to-r from-[#5496EE] to-[#0063E6] inline-block text-transparent bg-clip-text
            
            xls:text-3xl
            xls:mb-8 
            xxs:text-3xl
            xxs:mt-4
            xxs:mb-8
            sm:text-3xl
            sm:mt-6
            md:text-4xl
            md:mb-6
            lg:text-4xl
            lg:mb-2
            xl:text-4xl
            xl:mb-4
            2xl:text-4xl
            2xl:mb-6">Essentials</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className=' 
                            xls:mb-48
                            xxs:mb-96
                            sm:mb-96
                            md:mb-82    
                            lg:mb-40
                            xl:mb-48
                            2xl:mb-56'>
                                <FormControl className=" h-12 border rounded-sm border-[#3C4144]">
                                    <Input placeholder="Company name" {...field} className="py-4 border-2 border-[#3C4144] text-lg h-[65px] rounded-[10px] hover:border-[#5496EE] hover:border-[3px] transition-all-[0.3s]
                                    ease-in-out hover:placeholder-[#5496EE] 
                                    focus:placeholder-opacity-0" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-between items-center pt-8">
                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <span className="text-[#5496EE]">1</span>/5
                            </p>
                        </div>
                        <Button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 transition duration-100 ease-out w-fit text-center h-[40px] border rounded-[40px] text-lg">
                            Next <ChevronRight />
                        </Button>

                    </div>
                </form>
            </Form>
        </>
    )
}

export default Essentials