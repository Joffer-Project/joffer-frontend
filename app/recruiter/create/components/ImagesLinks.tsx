"use client";

import React from "react";
import ImageUpload from "@/components/ui/image-upload"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Clipboard, Copy, Dribbble, Github, Globe, Instagram, Linkedin, Twitter, UserCircle2 } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";
import Medium from "@/public/icons/Medium";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useRecruiter from '@/hooks/recruiter-store';

const schema = z.object({
    logoUrl: z.string().url(),
    image2Url: z.string().url().optional(),
    image3Url: z.string().url().optional(),
    image4Url: z.string().url().optional(),
    image5Url: z.string().url().optional(),
    companyUrl: z.string().url().optional(),
    linkedInUrl: z.string().url().optional(),
    twitterUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
    instaGramUrl: z.string().url().optional(),
});

interface ImagesLinksProps {
    setStep: (step: number) => void;
}


const ImagesLinks: React.FC<ImagesLinksProps> = ({
    setStep
}) => {

    const recruiterStore = useRecruiter();
    type FormValues = z.infer<typeof schema>;

    const defaultValues: FormValues = {        logoUrl: recruiterStore.formData.logoUrl || "",
    };


    const [currentBox, setCurrentBox] = React.useState("");
    const [currentLink, setCurrentLink] = React.useState("");
    const [comapnyUrl, setComapnyUrl] = React.useState(recruiterStore.formData.comapnyUrl || "");
    const [linkedInUrl, setLinkedInUrl] = React.useState(recruiterStore.formData.linkedInUrl || "");
    const [twitterUrl, setTwitterUrl] = React.useState(recruiterStore.formData.twitterUrl || "");
    const [instaGramUrl, setInstaGramUrl] = React.useState(recruiterStore.formData.instaGramUrl || "");
    const [youtubeUrl, setYoutubeUrl] = React.useState(recruiterStore.formData.youtubeUrl || "");

    const saveLink = () => {
        if (currentBox === "company") {
            setComapnyUrl(currentLink);
        } else if (currentBox === "linkedin") {
            setLinkedInUrl(currentLink);
        } else if (currentBox === "twitter") {
            setTwitterUrl(currentLink);
        } else if (currentBox === "instagram") {
            setInstaGramUrl(currentLink);
        } else if (currentBox === "youtube") {
            setYoutubeUrl(currentLink);
        }

        setCurrentLink("");
    }

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            recruiterStore.setState({ formData: { ...recruiterStore.formData, ...data, comapnyUrl, linkedInUrl, twitterUrl, instaGramUrl, youtubeUrl } });  
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setStep(5);
        }
    };
    return (
        <Dialog>
            <h2 className="font-normal text-4xl bg-gradient-to-r from-[#5496EE] to-[#0063E6] inline-block text-transparent bg-clip-text
            
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
            2xl:mb-[-20px]">Images & Links</h2>
            <p className="font-400 text-[#5C6062] leading-5 text-justify
            
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
            2xl:mt-[5px]">The images and links that you added will be shown on your profile as listed below. You can always update your images in the settings.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col xl:h-[300px] ml:h-[275px] sm:h-[400px] xxs:h-[400px]">
                    <h2 className="font-normal text-2xl mb-3">Images</h2>
                        <div className="flex gap-3 overflow-auto justify-between">
                            <FormField
                                control={form.control}
                                name="logoUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <ImageUpload
                                                value={field.value ? [field.value] : []}
                                                onChange={(url) => field.onChange(url)}
                                                onRemove={() => field.onChange('')}
                                                label="Logo"
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
                                                value={field.value ? [field.value] : []}
                                                onChange={(url) => field.onChange(url)}
                                                onRemove={() => field.onChange('')}
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
                                                value={field.value ? [field.value] : []}
                                                onChange={(url) => field.onChange(url)}
                                                onRemove={() => field.onChange('')}
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
                                                value={field.value ? [field.value] : []}
                                                onChange={(url) => field.onChange(url)}
                                                onRemove={() => field.onChange('')}
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
                                                value={field.value ? [field.value] : []}
                                                onChange={(url) => field.onChange(url)}
                                                onRemove={() => field.onChange('')}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <h2 className="font-normal text-2xl mb-3">Links</h2>
                        <div className="flex gap-3 overflow-auto justify-between -mb-4">

                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", comapnyUrl ? "border-[#5496EE]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("company")}
                                        >
                                            <Globe className={cn("h-8 w-8", comapnyUrl ? "text-[#5496EE]" : "text-gray-600")} />
                                            <small>Company</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", linkedInUrl ? "border-[#5496EE]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("linkedin")}
                                        >
                                            <Linkedin className={cn("h-8 w-8", linkedInUrl ? "text-[#5496EE]" : "text-gray-600")} />
                                            <small>LinkedIn</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", twitterUrl ? "border-[#5496EE]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("twitter")}
                                        >
                                            <Twitter className={cn("h-8 w-8", twitterUrl ? "text-[#5496EE]" : "text-gray-600")} />
                                            <small>Twitter</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", instaGramUrl ? "border-[#5496EE]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("instagram")}
                                        >
                                            <Instagram className={cn("h-8 w-8", instaGramUrl ? "text-[#5496EE]" : "text-gray-600")} />
                                            <small>Instagram</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", youtubeUrl ? "border-[#5496EE]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("youtube")}
                                        >
                                            <UserCircle2 className={cn("h-8 w-8", youtubeUrl ? "text-[#5496EE]" : "text-gray-600")} />
                                            <small>YouTube</small>
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
                                Links will be shown in your profile in the order as listed.
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
                                    value={currentLink} onChange={(e) => setCurrentLink(e.target.value)}
                                    placeholder="Paste link here"
                                    className="w-full"

                                />
                            </div>
                            <Button type="submit" size="sm" className="px-3">
                                <span className="sr-only">Paste</span>
                                <Clipboard className="h-4 w-4" onClick={() => navigator.clipboard.readText().then((clipText) => setCurrentLink(clipText))} />
                            </Button>
                        </div>
                        <DialogFooter className="sm:justify-start">

                            <DialogClose asChild>
                                <Button type="button" variant="default" onClick={saveLink}>
                                    Save
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                    <div className="flex justify-between items-center pt-8">
                        <Button
                            onClick={() => setStep(3)}
                            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 transition duration-100 ease-out w-fit text-center h-[40px] border rounded-[40px] text-lg"
                        >
                            <ChevronLeft /> Back
                        </Button>
                        <div className="flex flex-row justify-center items-center mx-auto py-6">
                            <p className="text-[22px] font-medium tracking-[5px]">
                                <span className="text-[#5496EE]">4</span>/5
                            </p>
                        </div>
                        <Button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 transition duration-100 ease-out w-fit text-center h-[40px] border rounded-[40px] text-lg">
                            Next <ChevronRight />
                        </Button>

                    </div>
                </form>
            </Form>
        </Dialog>
    );
};

export default ImagesLinks;
