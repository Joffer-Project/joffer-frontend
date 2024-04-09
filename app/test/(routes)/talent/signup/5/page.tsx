"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/actions/user";
import toast from "react-hot-toast";
import useUser from "@/hooks/user-store";
import { TalentPreviewModal } from "@/components/modals/talent-preview";

const schema = z.object({
    description: z.string().min(20).max(200),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
    description: "",
};

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const SignUpFormStep3 = ({ className, ...props }: UserAuthFormProps) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });
    const user = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <TalentPreviewModal
                isOpen={open}
                onClose={() => setOpen(false)}
                loading={loading}
            />
            <div className={cn("grid gap-6 p-20", className)} {...props}>
                <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Final step</h2>
                <p className="font-medium text-xl mb-4">Share some information about your career path. Remember to keep it direct, these pieces of information can place you ahead.</p>
                <Form {...form}>
                    <form className="space-y-2">

                        {/* textarea */}
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...form.register("description")}
                                    type="textarea"
                                    placeholder="Click here to start writing..."
                                    className="h-[260px] rounded-[40px] border border-[#FF7E33] text-xl p-4"
                                />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.description?.message}
                            </FormMessage>
                        </FormItem>

                        {/* step button 1/5 */}
                        <div className="flex justify-between items-center pt-8">

                            <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent/signup/2`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
                                {isLoading && (
                                    <p>Loading...</p>
                                )}
                                Previous
                            </Button>
                            <Button disabled={isLoading} type="button" onClick={() => setOpen(true)} className="bg-[#5C6062] w-[180px] h-[60px] border rounded-[40px] text-xl">
                                {isLoading && (
                                    <p>Loading...</p>
                                )}
                                Preview
                            </Button>
                            <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
                                {isLoading && (
                                    <p>Loading...</p>
                                )}
                                Start
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    );
};

export default SignUpFormStep3;
