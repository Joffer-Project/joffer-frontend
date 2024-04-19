import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { HowItWorksModal } from '@/components/modals/how-it-works';

interface ActionBarProps {
    likeAction: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ likeAction }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <HowItWorksModal
                isOpen={open}
                onClose={() => setOpen(false)}
            />
            <div className="flex justify-between items-center gap-2 py-8 w-full">
                <div className="flex flex-col justify-center items-center gap-1">
                    <img
                        src="/images/question-mark.png"
                        alt="logo"
                        onClick={() => setOpen(true)}
                        className={cn("h-8 md:h-10 lg:h-12 w-auto cursor-pointer")}
                    />
                    <div className="text-[14px] sm:text-[16] lg:text-[18px] font-medium text-[$A3A3A3]">How it works?</div>
                </div>
                <div className="flex justify-center items-end gap-14">
                    <img
                        src="/images/Close.png"
                        alt="logo"
                        className={cn("h-12 md:h-16 lg:h-20 w-auto cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-200")}
                    />
                    <img
                        src="/images/Superlike.png"
                        alt="logo"
                        className={cn("h-20 md:h-24 lg:h-36 w-auto cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-200")}
                    />
                    <img
                        src="/images/Like.png"
                        alt="logo"
                        className={cn("h-12 md:h-16 lg:h-20 w-auto cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-200")}
                        onClick={likeAction}
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <img
                        src="/images/settings.png"
                        alt="logo"
                        className={cn("h-8 md:h-10 lg:h-12 w-auto cursor-pointer")}
                    />
                    <div className="text-[14px] sm:text-[16] lg:text-[18px] font-medium text-[$A3A3A3]">Settings</div>
                </div>
            </div>
        </>
    )
}

export default ActionBar;
