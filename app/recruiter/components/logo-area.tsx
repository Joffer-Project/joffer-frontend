"use client"


import { cn } from "@/lib/utils"

export function LogoArea() {


    return (
        <div className={cn("flex items-center py-8")}>
            <img
                src="/images/logo-white.png"
                alt="logo"
                className={cn("h-16")}
            />
                <div className="text-2xl font-normal text-[#FDFDFD]">Latest Matches</div>

        </div>
    )
}