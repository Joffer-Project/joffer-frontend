"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface HowItWorksModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
    isOpen,
    onClose
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Modal
            title=""
            description=""
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col gap-16 p-8"> {/* Responsive layout for mobile/desktop */}
                <div className="flex gap-8 justify-center items-start">
                    <img
                        src="/images/Superlike.png"
                        alt="logo"
                        className="h-20 w-auto"
                    />
                    <div className="flex flex-col gap-2 justify-center items-start">
                        <h2 className="text-xl font-bold text-[#00367F]">Superlike</h2>
                        <p>This button is for the jobs that you're eager to learn more about, secure an interview for, or absolutely want to secure a position with. You can see them always on the Superlikes panel.</p>
                    </div>
                </div>
                <div className="flex gap-8 justify-center items-start">
                    <img
                        src="/images/Like.png"
                        alt="logo"
                        className="h-26 w-auto"
                    />
                    <div className="flex flex-col gap-2 justify-center items-start">
                        <h2 className="text-xl font-bold text-[#265B18]">Like</h2>
                        <p>This button is for the jobs that you're eager to learn more about, secure an interview for, or absolutely want to secure a position with. You can see them always on the Superlikes panel.</p>
                    </div>
                </div>
                <div className="flex gap-8 justify-center items-start">
                    <img
                        src="/images/Close.png"
                        alt="logo"
                        className="h-26 w-auto"
                    />
                    <div className="flex flex-col gap-2 justify-center items-start">
                        <h2 className="text-xl font-bold text-[#ff0000]">Dislike</h2>
                        <p>This button is for the jobs that you're eager to learn more about, secure an interview for, or absolutely want to secure a position with. You can see them always on the Superlikes panel.</p>
                    </div>
                </div>
            </div>

        </Modal>
    );
};