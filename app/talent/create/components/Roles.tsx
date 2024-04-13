"use client";

import React from "react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface RolesProps {
    form: any;
}

const Roles: React.FC<RolesProps> = ({
    form
}) => {

    const roles = [
        { id: "software-engineer", label: "Software Engineer" },
        { id: "product-manager", label: "Product Manager" },
        { id: "data-scientist", label: "Data Scientist" },
        { id: "ux-ui-designer", label: "UX/UI Designer" },
        { id: "business-analyst", label: "Business Analyst" },
        { id: "sales-marketing", label: "Sales & Marketing" },
        { id: "customer-support", label: "Customer Support" },
        { id: "operations", label: "Operations" },
        { id: "human-resources", label: "Human Resources" },
        { id: "finance", label: "Finance" },
        { id: "healthcare", label: "Healthcare" },
        { id: "technology", label: "Technology" },
        { id: "education", label: "Education" },
        { id: "real-estate", label: "Real Estate" },
        { id: "manufacturing", label: "Manufacturing" },
        { id: "retail", label: "Retail" },
        { id: "automotive", label: "Automotive" },
        { id: "construction", label: "Construction" },
        { id: "entertainment", label: "Entertainment" },
        { id: "media", label: "Media" },
        { id: "telecommunications", label: "Telecommunications" },
        { id: "transportation", label: "Transportation" },
        { id: "utilities", label: "Utilities" },
        { id: "agriculture", label: "Agriculture" },
        { id: "food", label: "Food" },
        { id: "hospitality", label: "Hospitality" },
        { id: "tourism", label: "Tourism" },
        { id: "sports", label: "Sports" },
        { id: "non-profit", label: "Non-Profit" },
        { id: "government", label: "Government" },
        { id: "other", label: "Other" },
    ];

    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Roles</h2>
            <p className="font-medium text-xl mb-6">Select the roles that align best with your interests, knowledge, experience, and wishes. </p>
            <div className="max-h-[200px] overflow-y-auto">
                <FormField
                    control={form.control}
                    name="roles"
                    render={() => (
                        <FormItem className="flex flex-wrap gap-2 justify-center items-center px-2">
                            {roles.map((item) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="roles"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex items-center !mt-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                    className="hidden"
                                                        checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...field.value, item.id])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value: string) => value !== item.id
                                                                    )
                                                                )
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className={`border-2 rounded-[40px] !mt-0 px-[30px] py-[14px] border-[#FF7E33] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${field.value?.includes(item.id) ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]" : "text-[#FF7E33]"}`}>
                                                    {item.label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </>
    );
};

export default Roles;