"use client";

import React from "react";
import ImageUpload from "@/components/ui/image-upload";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
	Clipboard,
	Copy,
	Dribbble,
	Github,
	Linkedin,
	UserCircle2,
} from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Medium from "@/public/icons/Medium";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useTalent from "@/hooks/talent-store";

const schema = z.object({
	avatarUrl: z.string().url(),
	image2Url: z.string().url().optional(),
	image3Url: z.string().url().optional(),
	image4Url: z.string().url().optional(),
	image5Url: z.string().url().optional(),
	gitHubUrl: z.string().url().optional(),
	linkedInUrl: z.string().url().optional(),
	mediumUrl: z.string().url().optional(),
	dribbleUrl: z.string().url().optional(),
	personalUrl: z.string().url().optional(),
});

interface ImagesLinksProps {
	setStep: (step: number) => void;
}

const ImagesLinks: React.FC<ImagesLinksProps> = ({ setStep }) => {
	const talentStore = useTalent();
	type FormValues = z.infer<typeof schema>;

	const defaultValues: FormValues = {
		avatarUrl: talentStore.formData.avatarUrl || "",
	};

	const [currentBox, setCurrentBox] = React.useState("");
	const [currentLink, setCurrentLink] = React.useState("");
	const [githubLink, setGithubLink] = React.useState(
		talentStore.formData.gitHubUrl || ""
	);
	const [linkedinLink, setLinkedinLink] = React.useState(
		talentStore.formData.linkedInUrl || ""
	);
	const [mediumLink, setMediumLink] = React.useState(
		talentStore.formData.mediumUrl || ""
	);
	const [dribbleLink, setDribbleLink] = React.useState(
		talentStore.formData.dribbleUrl || ""
	);
	const [personalLink, setPersonalLink] = React.useState(
		talentStore.formData.personalUrl || ""
	);

	const saveLink = () => {
		if (currentBox === "github") {
			setGithubLink(currentLink);
		} else if (currentBox === "linkedin") {
			setLinkedinLink(currentLink);
		} else if (currentBox === "medium") {
			setMediumLink(currentLink);
		} else if (currentBox === "dribble") {
			setDribbleLink(currentLink);
		} else if (currentBox === "personal") {
			setPersonalLink(currentLink);
		}

		setCurrentLink("");
	};

	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	const onSubmit = async (data: FormValues) => {
		try {
			talentStore.setState({
				formData: {
					...talentStore.formData,
					...data,
					gitHubUrl: githubLink,
					linkedInUrl: linkedinLink,
					mediumUrl: mediumLink,
					dribbleUrl: dribbleLink,
					personalUrl: personalLink,
				},
			});
		} catch (error: any) {
			toast.error("Something went wrong.");
		} finally {
			setStep(5);
		}
	};
	return (
		<Dialog>
			<h2
				className="font-normal text-4xl bg-gradient-to-r from-[#FF5E00] to-[#B54300] inline-block text-transparent bg-clip-text
            
            xls:text-[28px]
            xls:mt-[0px]
            xls:ml-[0px]
            xls:mb-[-25px] 
            xxs:text-[28px]
            xxs:mt-[16px]
            xxs:ml-[10px]
            xxs:mb-[-25px] 
            sm:text-[28px]
            sm:mt-[16px]
            sm:ml-[10px]
            sm:mb-[-25px] 
            md:text-[28px]
            md:mt-[10px]
            md:ml-[-10px]
            md:mb-[-25px]  
            ml:text-[28px]
            ml:mt-[10px]
            ml:ml-[-10px]
            ml:mb-[-25px] 
            xl:text-[36px]
            xl:mt-[28px]
            xl:ml-[-10px]
            xl:mb-[-20px]
            2xl:text-4xl
            2xl:mt-[20px]
            2xl:mb-[-20px]">
				Images & Links
			</h2>
			<p
				className="font-400 text-[#5C6062] leading-5 text-justify
            
            xls:text-[14px]
            xls:w-[22 0px]
            xls:mb-[-10px]
            xls:mt-[5px]
            xls:ml-[0px]
            xxs:text-[12px]
            xxs:w-[300px]
            xxs:mb-[-5px]
            xxs:mt-[5px]
            xxs:ml-[10px]
            sm:text-[14px]
            sm:w-[365px]
            sm:mb-[-5px]
            sm:mt-[5px]
            sm:ml-[10px]
            md:text-[14px]
            md:w-[450px]
            md:mb-[2px]
            md:mt-[5px]
            md:ml-[-10px]
            ml:text-[14px]
            ml:w-[500px]
            ml:mb-[-2px]
            ml:mt-[5px]
            ml:ml-[-10px]
            xl:text-[16px]
            xl:w-[530px]
            xl:mb-[0px]
            xl:mt-[5px]
            2xl:text-[18px]
            2xl:w-[560px]
            2xl:mb-[18px]
            2xl:mt-[5px]">
				The images and links that you added will be shown on your
				profile as listed below. You can always update your images in
				the settings.
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex flex-col xl:h-[300px] ml:h-[275px] sm:h-[400px] xxs:h-[400px]">
						<h2 className="font-normal text-2xl mb-3">Images</h2>
						<div className="flex gap-3 overflow-auto ml:flex justify-between flex-wrap">
							<FormField
								control={form.control}
								name="avatarUrl"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ImageUpload
												value={
													field.value
														? [field.value]
														: []
												}
												onChange={(url) =>
													field.onChange(url)
												}
												onRemove={() =>
													field.onChange("")
												}
												label="Profile Picture"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image2Url"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ImageUpload
												value={
													field.value
														? [field.value]
														: []
												}
												onChange={(url) =>
													field.onChange(url)
												}
												onRemove={() =>
													field.onChange("")
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image3Url"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ImageUpload
												value={
													field.value
														? [field.value]
														: []
												}
												onChange={(url) =>
													field.onChange(url)
												}
												onRemove={() =>
													field.onChange("")
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image4Url"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ImageUpload
												value={
													field.value
														? [field.value]
														: []
												}
												onChange={(url) =>
													field.onChange(url)
												}
												onRemove={() =>
													field.onChange("")
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="image5Url"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ImageUpload
												value={
													field.value
														? [field.value]
														: []
												}
												onChange={(url) =>
													field.onChange(url)
												}
												onRemove={() =>
													field.onChange("")
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<h2 className="font-normal text-2xl mb-3">Links</h2>
						<div className="flex gap-3 overflow-auto ml:flex justify-between">
							<FormItem>
								<FormControl>
									<DialogTrigger
										asChild
										className="hover:text-blue-500 hover:border-blue-500">
										<Button
											type="button"
											variant="secondary"
											className={cn(
												"w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
												githubLink
													? "border-[#FF7E33]"
													: "border-gray-600"
											)}
											onClick={() =>
												setCurrentBox("github")
											}>
											<div className="hover:text-blue-500 transition-transform transform hover:scale-110 justify-center">
												<Github
													className={cn(
														"h-8 w-8",
														linkedinLink
															? "text-[#FF7E33]"
															: "text-gray-600",
														"hover:text-blue-500"
													)}
												/>
												<small>Github</small>
											</div>
										</Button>
									</DialogTrigger>
								</FormControl>
								<FormMessage />
							</FormItem>
							<FormItem>
								<FormControl>
									<DialogTrigger
										asChild
										className="hover:text-blue-500 hover:border-blue-500">
										<Button
											type="button"
											variant="secondary"
											className={cn(
												"w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
												linkedinLink
													? "border-[#FF7E33]"
													: "border-gray-600"
											)}
											onClick={() =>
												setCurrentBox("linkedin")
											}>
											<div className="hover:text-blue-500 transition-transform transform hover:scale-110 flex justify-center items-center flex-col">
												<Linkedin
													className={cn(
														"h-8 w-8",
														linkedinLink
															? "text-[#FF7E33]"
															: "text-gray-600",
														"hover:text-blue-500"
													)}
												/>
												<small>Linkedin</small>
											</div>
										</Button>
									</DialogTrigger>
								</FormControl>
								<FormMessage />
							</FormItem>
							<FormItem>
								<FormControl>
									<DialogTrigger
										asChild
										className="hover:text-blue-500 hover:border-blue-500">
										<Button
											type="button"
											variant="secondary"
											className={cn(
												"w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
												mediumLink
													? "border-[#FF7E33]"
													: "border-gray-600"
											)}
											onClick={() =>
												setCurrentBox("medium")
											}>
											<div className="hover:text-blue-500 transition-transform transform hover:scale-110 flex justify-center items-center flex-col">
												<Medium
													className={cn(
														"h-8 w-8",
														linkedinLink
															? "text-[#FF7E33]"
															: "text-gray-600",
														"hover:text-blue-500"
													)}
												/>
												<small>Medium</small>
											</div>
										</Button>
									</DialogTrigger>
								</FormControl>
								<FormMessage />
							</FormItem>
							<FormItem>
								<FormControl>
									<DialogTrigger
										asChild
										className="hover:text-blue-500 hover:border-blue-500">
										<Button
											type="button"
											variant="secondary"
											className={cn(
												"w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
												dribbleLink
													? "border-[#FF7E33]"
													: "border-gray-600"
											)}
											onClick={() =>
												setCurrentBox("dribble")
											}>
											<div className="hover:text-blue-500 transition-transform transform hover:scale-110 flex justify-center items-center flex-col">
												<Dribbble
													className={cn(
														"h-8 w-8",
														linkedinLink
															? "text-[#FF7E33]"
															: "text-gray-600",
														"hover:text-blue-500"
													)}
												/>
												<small>Dribbble</small>
											</div>
										</Button>
									</DialogTrigger>
								</FormControl>
								<FormMessage />
							</FormItem>
							<FormItem>
								<FormControl>
									<DialogTrigger
										asChild
										className="hover:text-blue-500 hover:border-blue-500">
										<Button
											type="button"
											variant="secondary"
											className={cn(
												"w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
												personalLink
													? "border-[#FF7E33]"
													: "border-gray-600"
											)}
											onClick={() =>
												setCurrentBox("personal")
											}>
											<div className="hover:text-blue-500 transition-transform transform hover:scale-110 flex justify-center items-center flex-col">
												<UserCircle2
													className={cn(
														"h-8 w-8",
														linkedinLink
															? "text-[#FF7E33]"
															: "text-gray-600",
														"hover:text-blue-500"
													)}
												/>
												<small>Personal</small>
											</div>
										</Button>
									</DialogTrigger>
								</FormControl>
								<FormMessage />
							</FormItem>
						</div>
					</div>

					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>Share your link below</DialogTitle>
							<DialogDescription>
								Links will be shown in your profile in the order
								as listed.
							</DialogDescription>
						</DialogHeader>
						<div className="flex items-center space-x-2">
							<div className="grid flex-1 gap-2">
								<Label htmlFor="link" className="sr-only">
									Link
								</Label>
								<Input
									id="link"
									type="text"
									value={currentLink}
									onChange={(e) =>
										setCurrentLink(e.target.value)
									}
									placeholder="Paste link here"
									className="w-full"
								/>
							</div>
							<Button type="submit" size="sm" className="px-3">
								<span className="sr-only">Paste</span>
								<Clipboard
									className="h-4 w-4"
									onClick={() =>
										navigator.clipboard
											.readText()
											.then((clipText) =>
												setCurrentLink(clipText)
											)
									}
								/>
							</Button>
						</div>
						<DialogFooter className="sm:justify-start">
							<DialogClose asChild>
								<Button
									type="button"
									variant="default"
									onClick={saveLink}>
									Save
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
					<div className="flex justify-between items-center pt-8">
						<Button
							onClick={() => setStep(3)}
							className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
							<ChevronLeft /> Back
						</Button>
						<div className="flex flex-row justify-center items-center mx-auto py-6">
							<p className="text-[22px] font-medium tracking-[5px]">
								<span className="text-[#FF7E33]">4</span>/5
							</p>
						</div>
						<Button
							type="submit"
							className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
							Next <ChevronRight />
						</Button>
					</div>
				</form>
			</Form>
		</Dialog>
	);
};

export default ImagesLinks;
