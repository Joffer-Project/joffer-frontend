"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface TalentPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    loading: boolean;
}

export const TalentPreviewModal: React.FC<TalentPreviewModalProps> = ({
    isOpen,
    onClose,
    loading
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
            title="About me"
            description=""
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col md:flex-row"> {/* Responsive layout for mobile/desktop */}
                <div className="w-full md:w-40 flex items-center justify-center p-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNBhGtr81_poJWtdQpvlfH0UVZMwZmV4WwQ&usqp=CAU" alt="John Doe" className="rounded-lg object-cover h-full w-full" />
                </div>
                <div className="w-full md:w-60 p-4">
                    <div className="flex items-center mb-2">
                        <h3 className="text-lg font-medium mr-2">John Doe</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex flex-wrap">
                        <a href="#" key="link1" className="mr-2 text-blue-500 hover:underline">Link 1</a>
                        <a href="#" key="link2" className="mr-2 text-blue-500 hover:underline">Link 2</a>
                    </div>
                </div>
            </div>

        </Modal>
    );
};