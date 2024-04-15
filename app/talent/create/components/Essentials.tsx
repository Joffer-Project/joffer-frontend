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
import useTalent from '@/hooks/talent-store';

const schema = z.object({
    name: z.string().min(3).max(100),
});

interface EssentialsProps {
    setStep: (step: number) => void;
}

const Essentials: React.FC<EssentialsProps> = (
    { setStep }
) => {
    const talentStore = useTalent();
    type FormValues = z.infer<typeof schema>;

    const defaultValues: FormValues = {
        name: talentStore.formData.name || "",
    };

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
            setStep(2);
        }
    };

    return (
        <>
            <h2 className="font-bold text-3xl mb-6 text-[#FF7E33]">Essentials</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
                                    <Input placeholder="Name" {...field} className="py-4 text-lg" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-between items-center pt-8">
                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <span className="text-[#FF7E33]">1</span>/5
                            </p>
                        </div>
                        <Button type="submit" className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
                            Next <ChevronRight />
                        </Button>

                    </div>
                </form>
            </Form>
        </>
    )
}

export default Essentials