"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
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
import Steps from "./Steps";

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

const SignUpForm = ({ className, ...props }: UserAuthFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const user = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);

  const updateStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className={cn("grid gap-6 p-20", className)} {...props}>
      <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Essentials</h2>
      <Form {...form}>
        <form className="space-y-2">
        {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
                  <Input placeholder="Name" {...field} className="py-4 text-lg"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
                  <Input placeholder="Mail" {...field} className="py-4 text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
                  <Input type="password" placeholder="Password" {...field} className="py-4 text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
                  <Input type="password" placeholder="Repeat password" {...field} className="py-4 text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* step button */}
          <Steps
            step={step}
            setStep={updateStep}
          />
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
