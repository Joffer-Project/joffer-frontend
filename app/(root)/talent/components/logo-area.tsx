"use client"

import * as React from "react"

import { cn } from "@/lib/utils"


interface LogoAreaProps {
    isCollapsed: boolean
}

export function LogoArea({
    isCollapsed,
}: LogoAreaProps) {


    return (
        <div className={cn("flex items-center justify-center", isCollapsed ? "w-12" : "w-64")}>
            <img
                src="/images/logo.png"
                alt="logo"
                className={cn("h-8 w-auto", isCollapsed ? "h-6" : "h-8")}
            />

            {!isCollapsed && (
                <div className="ml-2 text-lg font-bold text-white">Talent</div>
            )}

        </div>
    )
}