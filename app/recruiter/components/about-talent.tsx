import React from 'react';

interface AboutTalentProps {
    data: string | null | undefined;
}

const AboutTalent: React.FC<AboutTalentProps> = ({ data }) => {
    return (
        <div className="bg-[#FDFDFD] rounded-sm p-4 h-full w-full">
            <div className="mb-1">
                <h1 className="text-[#616161] text-[16px] font-medium">About {data ? data : "Talent"}</h1>
            </div>
            <div className="overflow-y-auto h-full text-[14px] text-[#7F7F7F]">
                {data ? data : "No data available"}
            </div>
        </div>
    );
}

export default AboutTalent;