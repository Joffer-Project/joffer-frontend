"use client";

import React from "react";


interface ImagesLinksProps { }

const ImagesLinks: React.FC<ImagesLinksProps> = ({ }) => {



    return (
        <>
            <h2 className="font-bold text-3xl mb-4 text-[#FF7E33]">Images & Links</h2>
            <p className="font-medium text-xl mb-6">The images and links that you added will be shown on your profile as listed below. You can always update your images in the settings.</p>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="profileImage" className="font-medium text-[18px]">Profile Image</label>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            className="w-[300px] h-[50px] border rounded-[40px] p-4"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="coverImage" className="font-medium text-[18px]">Cover Image</label>
                        <input
                            type="file"
                            id="coverImage"
                            name="coverImage"
                            className="w-[300px] h-[50px] border rounded-[40px] p-4"
                        />
                    </div>
                </div>
                {/* links */}
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="profileImage" className="font-medium text-[18px]">Profile Image</label>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            className="w-[300px] h-[50px] border rounded-[40px] p-4"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="coverImage" className="font-medium text-[18px]">Cover Image</label>
                        <input
                            type="file"
                            id="coverImage"
                            name="coverImage"
                            className="w-[300px] h-[50px] border rounded-[40px] p-4"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImagesLinks;
