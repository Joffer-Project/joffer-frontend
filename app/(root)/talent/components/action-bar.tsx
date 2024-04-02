import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { HowItWorksModal } from '@/components/modals/how-it-works';

export default function ActionBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <HowItWorksModal
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        <div className="flex justify-between items-center flex-wrap gap-2 py-8">
            <div className="flex flex-col justify-center items-center gap-1">
                <img
                    src="/images/question-mark.png"
                    alt="logo"
                    onClick={() => setOpen(true)}
                    className={cn("h-12 w-auto cursor-pointer")}
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
        </>
    )
}
