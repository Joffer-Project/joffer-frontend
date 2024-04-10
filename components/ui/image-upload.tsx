"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlusCircle, Trash } from 'lucide-react';

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
    label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value,
    label,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <div className="mb-4 flex flex-col items-center gap-2">
                <div className="relative w-[80px] h-[80px] rounded-md overflow-hidden">

                    {value[0] && (
                        <>
                            <div className="z-10 absolute top-2 right-2">
                                <Button type="button" onClick={() => onRemove(value[0])} variant="destructive" size="sm">
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image fill className="object-cover w-full h-full" alt="Image" src={value[0]} />
                            </div>
                        </>
                    )}
                    <CldUploadWidget onUpload={onUpload} uploadPreset="qajv0lys">
                        {({ open }) => {
                            const onClick = () => {
                                open();
                            };

                            return (
                                <Button
                                    type="button"
                                    disabled={disabled}
                                    variant="secondary"
                                    onClick={onClick}
                                    className="w-full h-full border-2 border-gray-600 joffer-image-upload-btn"
                                >
                                    <PlusCircle className="h-8 w-8 text-gray-600 joffer-image-upload-btn-icon" />
                                </Button>
                            );
                        }}
                    </CldUploadWidget>
                </div>
                {label && <label className="text-xs font-medium text-gray-800">{label}</label>}
            </div>
        </div>

    );
}

export default ImageUpload;