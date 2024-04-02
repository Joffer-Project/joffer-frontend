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
        <div className={cn("flex items-center py-8")}>
            <img
                src="/images/logo.png"
                alt="logo"
                className={cn("h-16 w-auto")}
            />

            {!isCollapsed && (
                <div className="text-2xl font-medium text-white">Latest Matchs</div>
            )}

        </div>
    )
}