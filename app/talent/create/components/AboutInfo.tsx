"use client";

import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
            <FormItem>
                <FormControl>
                    <Input
                        {...form.register("description")}
                        type="textarea"
                        placeholder="Click here to start writing..."
                        className="h-[260px] rounded-[40px] border border-[#FF7E33] text-xl p-4"
                    />
                </FormControl>
                <FormMessage>
                    {form.formState.errors.description?.message}
                </FormMessage>
            </FormItem>
        </>
    );
};

export default AboutInfo;
