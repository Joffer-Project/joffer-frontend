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

const SignUpFormStep3 = ({ className, ...props }: UserAuthFormProps) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });
    const user = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const roles = [
        "Software Engineer",
        "QA Engineer",
        "Product Manager",
        "Data Analyst",
        "Data Scientist",
        "Business Analyst",
        "Sales Manager",
        "Marketing Manager",
        "HR Manager",
        "Recruiter",
        "Customer Support",
        "Customer Success",
        "Account Manager",
        "Accountant",
        "Finance Manager",
        "Legal Counsel",
        "Lawyer",
        "Paralegal",
        "Nurse",
        "Doctor",
        "Pharmacist",
        "Teacher",
        "Professor",
        "Principal",
        "Dean",
    ];

    return (
        <div className={cn("grid gap-6 p-20", className)} {...props}>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Roles</h2>
            <p className="font-medium text-xl mb-4">Select the roles that align best with your interests, knowledge, experience, and wishes.</p>
            <Form {...form}>
                <form className="space-y-2">
                    <div className="flex flex-wrap gap-4 max-h-[200px] overflow-y-auto">
                    {
                        roles.map((role, index) => (
                            <div className="flex" key={index}>
                        <input type="checkbox" id={role} className="peer hidden" />
                        <label htmlFor={role} className="select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-[#FF7E33] transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "> {role} </label>
                    </div>
                        ))
                    }
                    </div>


                    {/* step button 1/5 */}
                    <div className="flex justify-between items-center pt-8">

                        <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent/signup/2`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
                            {isLoading && (
                                <p>Loading...</p>
                            )}
                            Previous
                        </Button>

                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <Link href="/talent/signup" className="text-[#FF7E33]">
                                    3
                                </Link>
                                /5
                            </p>
                        </div>
                        <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent/signup/4`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
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

export default SignUpFormStep3;
