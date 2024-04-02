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
	password: z.string().min(8).max(100),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
	email: "",
	password: "",
};

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoginForm = ({ className, ...props }: UserAuthFormProps) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues,
	});
	const user = useUser();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function onSubmit(data: FormValues) {
		try {
			setIsLoading(true);
			const response = await userLogin(data.email, data.password);
			if (response?.success) {
				// save info to local storage
				user.setActive(response.user);
				user.setLogged(true);
				router.push("/");
			} else {
				toast.error("Invalid credentials");
			}
		} catch (error) {
			toast.error("Something went wrong");
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className={cn("grid gap-6 p-20", className)} {...props}>
			<h2 className="font-bold text-3xl mb-4">Welcome, unique talent!</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
									<Input
										placeholder="Mail"
										{...field}
										className="py-4 text-lg"
									/>
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
									<Input
										type="password"
										placeholder="Password"
										{...field}
										className="py-4 text-lg"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-wrap justify-between items-center gap-4 py-6">
						<Link href="/talent/signup" className="">
							<p className="text-[18px] font-medium text-[#FF7E33]">
								Create an account?
							</p>
						</Link>
						<Link href="/" className="">
							<p className="text-[18px] font-medium text-[#FF7E33]">
								Forgot your password?
							</p>
						</Link>
					</div>
					<div className="flex flex-col justify-center items-center">
						<Button
							disabled={isLoading}
							className="bg-[#FF7E33] w-[180px] h-[60px] border rounded-[40px] text-xl">
							{isLoading && <p>Loading...</p>}
							Log In
						</Button>
					</div>
				</form>
			</Form>
			<p className=" text-x text-center">or login with socials </p>
		</div>
	);
};

export default LoginForm;
