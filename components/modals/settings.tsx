"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
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
            <div className="flex flex-col gap-16 p-8">
                <a href="/api/auth/logout" className="text-[#3C4144] m-auto text-lg font-semibold">
                    <Button className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg"><LogOut className="w-6 h-6 mr-2" />Logout</Button>
                </a>
            </div>

        </Modal>
    );
};