import { Company } from '@/types';
import React from 'react';

interface AboutTalentProps {
    data: string | null | undefined;
}

const AboutTalent: React.FC<AboutTalentProps> = ({ data }) => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="mb-4">
                <h1 className="text-[#3C4144] text-2xl font-semibold">About {data ? data : "Talent"}</h1>
            </div>
            <div className="overflow-y-auto max-h-[300px] text-[#3C4144]">
                {data ? data : "No data available"}
            </div>
        </div>
    );
}

export default AboutTalent;