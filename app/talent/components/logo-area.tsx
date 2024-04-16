"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export function LogoArea() {


    return (
        <div className={cn("flex items-center py-8")}>
            <img
                src="/images/logo.png"
                alt="logo"
                className={cn("h-12 w-auto")}
            />
                <div className="text-2xl font-medium text-white ml-4">Latest Matchs</div>

        </div>
    )
}