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

interface ImagesLinksProps {
    form: any;
}


const ImagesLinks: React.FC<ImagesLinksProps> = ({
    form
}) => {



    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Images & Links</h2>
            <p className="font-medium text-xl mb-6">The images and links that you added will be shown on your profile as listed below. You can always update your images in the settings.</p>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
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
                </div>
            </div>
        </>
    );
};

export default ImagesLinks;
