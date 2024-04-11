"use client";

import React from "react";
import ImageUpload from "@/components/ui/image-upload"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Clipboard, Copy, Dribbble, Github, Linkedin, UserCircle2 } from "lucide-react";
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

interface ImagesLinksProps {
    form: any;
}


const ImagesLinks: React.FC<ImagesLinksProps> = ({
    form
}) => {


    const [currentBox, setCurrentBox] = React.useState("");
    const [currentLink, setCurrentLink] = React.useState("");
    const [githubLink, setGithubLink] = React.useState("");
    const [linkedinLink, setLinkedinLink] = React.useState("");
    const [mediumLink, setMediumLink] = React.useState("");
    const [dribbleLink, setDribbleLink] = React.useState("");
    const [personalLink, setPersonalLink] = React.useState("");

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
    }

    return (
        <Dialog>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Images & Links</h2>
            <p className="font-medium text-xl mb-6">The images and links that you added will be shown on your profile as listed below. You can always update your images in the settings.</p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 overflow-auto justify-between">
                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <ImageUpload
                                        value={field.value ? [field.value] : []}
                                        onChange={(url) => field.onChange(url)}
                                        onRemove={() => field.onChange('')}
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
                <div className="flex gap-3 overflow-auto justify-between -mb-4">
                    <FormField
                        control={form.control}
                        name=""
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", githubLink ? "border-[#FF7E33]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("github")}
                                        >
                                            <Github className={cn("h-8 w-8", githubLink ? "text-[#FF7E33]" : "text-gray-600")} />
                                            <small>Github</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name=""
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", linkedinLink ? "border-[#FF7E33]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("linkedin")}
                                        >
                                            <Linkedin className={cn("h-8 w-8", linkedinLink ? "text-[#FF7E33]" : "text-gray-600")} />
                                            <small>LinkedIn</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name=""
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", mediumLink ? "border-[#FF7E33]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("medium")}
                                        >
                                            <Medium className={cn("h-8 w-8", mediumLink ? "text-[#FF7E33]" : "text-gray-600")} />
                                            <small>Medium</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name=""
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", dribbleLink ? "border-[#FF7E33]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("dribble")}
                                        >
                                            <Dribbble className={cn("h-8 w-8", dribbleLink ? "text-[#FF7E33]" : "text-gray-600")} />
                                            <small>Dribble</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name=""
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <DialogTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className={cn("w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2", personalLink ? "border-[#FF7E33]" : "border-gray-600")}
                                            onClick={() => setCurrentBox("personal")}
                                        >
                                            <UserCircle2 className={cn("h-8 w-8", personalLink ? "text-[#FF7E33]" : "text-gray-600")} />
                                            <small>Personal</small>
                                        </Button>
                                    </DialogTrigger>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
        </Dialog>
    );
};

export default ImagesLinks;
