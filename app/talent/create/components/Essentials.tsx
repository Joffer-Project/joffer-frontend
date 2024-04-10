import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EssentialsProps {
    form: any;
}
const Essentials: React.FC<EssentialsProps> = ({
    form
}) => {
    return (
        <>
            <h2 className="font-bold text-3xl mb-6 text-[#FF7E33]">Essentials</h2>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormControl className="mb-4 h-12 border rounded-sm border-[#3C4144]">
                            <Input placeholder="Name" {...field} className="py-4 text-lg" />
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
        </>
    )
}

export default Essentials