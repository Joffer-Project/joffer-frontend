import { Company } from '@/types';
import React from 'react';

interface AboutCompanyProps {
    data: Company | undefined;
}

const AboutCompany: React.FC<AboutCompanyProps> = ({ data }) => {
    return (
        <div className="bg-[#FDFDFD] rounded-sm p-4 h-full">
            <div className="mb-1">
                <h1 className="text-[#616161] text-[16px] font-medium">About Nokia {data?.name ? data.name : ""}</h1>
            </div>
            <div className="overflow-y-auto max-h-[300px] text-[14px] text-[#7F7F7F]">
                {data?.description ? data.description : "No data available"}
            </div>
        </div>
    );
}

export default AboutCompany;