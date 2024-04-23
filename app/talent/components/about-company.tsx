import { Company } from '@/types';
import React from 'react';

interface AboutCompanyProps {
    data: Company | undefined;
}

const AboutCompany: React.FC<AboutCompanyProps> = ({ data }) => {
    return (
        <div className="bg-[#FDFDFD] rounded-sm p-4 h-full">
            <div className="mb-1 flex row gap-2 ">
                <h1 className="text-[#616161] text-[20px] font-medium">About Nokia {data?.name ? data.name : ""}</h1>
                <div className='mt-[11px] sm:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="8" viewBox="0 0 24 14" fill="none">
  <path d="M22 2L12 12L2 2" stroke="#616161" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
            </div>
            <div className="overflow-y-auto max-h-[300px] text-[#7F7F7F]">
                {data?.description ? data.description : "No data available"}                   
            </div>
        </div>
    );
}

export default AboutCompany;