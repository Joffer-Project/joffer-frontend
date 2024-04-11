"use client";

import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AboutInfoProps {
    form: any;
}

const AboutInfo: React.FC<AboutInfoProps> = ({
    form
}) => {



    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Final step</h2>
            <p className="font-medium text-xl mb-6">Share some information about your career path. Remember to keep it direct, these pieces of information can place you ahead.</p>
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormControl> 
                            <Textarea
                                placeholder="Tell us a little bit about yourself"
                                className="rounded-md border border-[#FF7E33] resize-y max-h-[200px] md:h-[200px]"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

export default AboutInfo;
