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

const schema = z.object({
    email: z.string().email(),
    name: z.string().min(3).max(100),
    password: z.string().min(8).max(100),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
    email: "",
    name: "",
    password: "",
};

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const SignUpFormStep4 = ({ className, ...props }: UserAuthFormProps) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });
    const user = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    

    return (
        <div className={cn("grid gap-6 p-20", className)} {...props}>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Images & Links</h2>
            <p className="font-medium text-xl mb-4">Select the roles that align best with your interests, knowledge, experience, and wishes.The images and links that you added will be shown on your profile as listed below. You can always update your images in the settings.</p>
            <Form {...form}>
                <form className="space-y-2">
                    <div className="flex flex-col  max-h-[200px] overflow-y-auto gap-8">
                        <h2 className="font-medium text-[22px]">Images</h2>
                        <div className="flex gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="profileImage" className="font-medium text-[18px]">Profile Image</label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    name="profileImage"
                                    className="w-[300px] h-[50px] border rounded-[40px] p-4"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="coverImage" className="font-medium text-[18px]">Cover Image</label>
                                <input
                                    type="file"
                                    id="coverImage"
                                    name="coverImage"
                                    className="w-[300px] h-[50px] border rounded-[40px] p-4"
                                />
                            </div>
                        </div>
                        {/* links */}
                        <h2 className="font-medium text-[22px]">Links</h2>
                        <div className="flex gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="profileImage" className="font-medium text-[18px]">Profile Image</label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    name="profileImage"
                                    className="w-[300px] h-[50px] border rounded-[40px] p-4"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="coverImage" className="font-medium text-[18px]">Cover Image</label>
                                <input
                                    type="file"
                                    id="coverImage"
                                    name="coverImage"
                                    className="w-[300px] h-[50px] border rounded-[40px] p-4"
                                />
                            </div>
                        </div>
                    </div>


                    {/* step button 1/5 */}
                    <div className="flex justify-between items-center pt-8">

                        <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent/signup/3`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
                            {isLoading && (
                                <p>Loading...</p>
                            )}
                            Previous
                        </Button>

                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <Link href="/talent/signup" className="text-[#FF7E33]">
                                    4
                                </Link>
                                /5
                            </p>
                        </div>
                        <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent/signup/5`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
                            {isLoading && (
                                <p>Loading...</p>
                            )}
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default SignUpFormStep4;
