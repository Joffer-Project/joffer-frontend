import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import useRecruiter from '@/hooks/recruiter-store';
import { useUser } from '@auth0/nextjs-auth0/client';
import { createRecruiter } from '@/actions/recruiter';
import { createRole } from '@/actions/roles';
import { createIndustry } from '@/actions/industry';
import { useRouter } from 'next/navigation'
import Loader from '@/components/ui/loader';

const schema = z.object({
    description: z.string().min(20).max(1000),
});


interface AboutInfoProps {
    setStep: (step: number) => void;
}

const AboutInfo: React.FC<AboutInfoProps> = ({
    setStep
}) => {
    const router = useRouter()
    const { user } = useUser();
    const recruiterStore = useRecruiter();
    const [loading, setLoading] = useState<boolean>(false);
    type FormValues = z.infer<typeof schema>;

    const defaultValues: FormValues = {
        description: recruiterStore.formData.description || "",
    };

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            setLoading(true);
            recruiterStore.setState({
                formData: {
                    ...recruiterStore.formData,
                    ...data,
                    auth0Id: user?.sub || "",
                    email: user?.email || "",
                }
            });

            // post recruiter data
            const res = await createRecruiter(recruiterStore.getState().formData);
            if (res) {
                const response = await fetch("/api/token");
                const { accessToken } = await response.json();
                const roleRes = await createRole(recruiterStore.getState().selectedRoles, accessToken, recruiterStore.getState().roles);
                const industryRes = await createIndustry(recruiterStore.getState().selectedIndustries, accessToken, recruiterStore.getState().industries);
                if (roleRes && industryRes) {
                    toast.success('Account created successfully');
                    router.push('/recruiter');
                } else {
                    toast.error('Something went wrong.');
                    console.log('Error creating roles and industries', roleRes, industryRes);
                }
            }
        } catch (error: any) {
            toast.error('Something went wrong.');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#5496EE]">Final step</h2>
            <p className="font-medium text-xl mb-6">Share some information about your career path. Remember to keep it direct, these pieces of information can place you ahead.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="rounded-md border border-[#5496EE] resize-y max-h-[200px] md:h-[200px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between items-center pt-8">
                        <Button
                            onClick={() => setStep(4)}
                            className="bg-[#5496EE] w-fit text-center h-[40px] border rounded-[40px] text-lg" disabled={loading}
                        >
                            <ChevronLeft /> Back
                        </Button>
                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <span className="text-[#5496EE]">5</span>/5
                            </p>
                        </div>
                        <Button type="submit" className="bg-[#5496EE] w-fit text-center h-[40px] border rounded-[40px] text-lg" disabled={loading}>
                            {
                                loading ? 'Creating Profile' : <>
                                    Finish <ChevronRight />
                                </>
                            }
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default AboutInfo;
