import React from 'react'
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
import useTalent from '@/hooks/talent-store';
import { useUser } from '@auth0/nextjs-auth0/client';
import { createAccount } from '@/actions/account';
import { createTalent } from '@/actions/talent';
import { createRole } from '@/actions/roles';
import { createIndustry } from '@/actions/industry';
import { useRouter } from 'next/navigation'

const schema = z.object({
    aboutMe: z.string().min(20).max(200),
});


interface AboutInfoProps {
    setStep: (step: number) => void;
}

const AboutInfo: React.FC<AboutInfoProps> = ({
    setStep
}) => {
    const router = useRouter()
    const { user } = useUser();
    const talentStore = useTalent();
    type FormValues = z.infer<typeof schema>;

    const defaultValues: FormValues = {
        aboutMe: talentStore.formData.aboutMe || "",
    };

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            talentStore.setState({ formData: { 
                ...talentStore.formData, 
                ...data,
             } });
             toast.success('Account created successfully');
            // account create
            await createAccount({
                auth0Id: user?.sub || "",
                name: talentStore.action().name,
                email: user?.email || "",
                accountType: "talent",
            });
            // post talent data
            await createTalent(talentStore.formData);
            // post roles data
            await createRole(talentStore.formData.roles);
            // post industries data
            await createIndustry(talentStore.formData.industries);
            // redrict to dashboard
            router.push('/talent');
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            // setLoading(false);
        }
    };

    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Final step</h2>
            <p className="font-medium text-xl mb-6">Share some information about your career path. Remember to keep it direct, these pieces of information can place you ahead.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="aboutMe"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="rounded-md border border-[#FF7E33] resize-y max-h-[200px] md:h-[200px]"
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
                            className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg"
                        >
                            <ChevronLeft /> Back
                        </Button>
                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <span className="text-[#FF7E33]">5</span>/5
                            </p>
                        </div>
                        <Button type="submit" className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
                            Start <ChevronRight />
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default AboutInfo;
