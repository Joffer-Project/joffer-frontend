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

const SignUpForm = ({ className, ...props }: UserAuthFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const user = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);


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
                <FormControl>
                  <Input placeholder="Name" {...field} />
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
                <FormControl>
                  <Input placeholder="Mail" {...field} />
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
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
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
                <FormControl>
                  <Input type="password" placeholder="Repeat password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* step button 1/5 */}
          <div className="flex justify-between items-center pt-8">

            {/* step */}
            <div className="flex flex-row justify-center items-center mx-auto py-6">
              <p className="text-[22px] font-medium tracking-[5px]">
                <Link href="/talent/signup" className="text-[#FF7E33]">
                  1
                </Link>
                /5
              </p>
            </div>
            <Button disabled={isLoading} type="button" onClick={() => router.push(`/talent/signup/2`)} className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
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

export default SignUpForm;
