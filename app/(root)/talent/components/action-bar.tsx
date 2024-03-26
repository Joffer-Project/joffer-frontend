import React from 'react'
import { cn } from '@/lib/utils'

export default function ActionBar() {
    return (
        <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex flex-col justify-center items-center gap-1">
                <img
                    src="/images/question-mark.png"
                    alt="logo"
                    className={cn("h-12 w-auto")}
                />
                <div className="text-[18px] font-medium text-[$A3A3A3]">How it works?</div>
            </div>
            <div className="flex justify-center items-end gap-14">
                <img
                    src="/images/Close.png"
                    alt="logo"
                    className={cn("h-20 w-auto")}
                />
                <img
                    src="/images/Superlike.png"
                    alt="logo"
                    className={cn("h-36 w-auto")}
                />
                <img
                    src="/images/Like.png"
                    alt="logo"
                    className={cn("h-20 w-auto")}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <img
                    src="/images/settings.png"
                    alt="logo"
                    className={cn("h-12 w-auto")}
                />
                <div className="text-[18px] font-medium text-[$A3A3A3]">Settings</div>
            </div>
        </div>
    )
}
