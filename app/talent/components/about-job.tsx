import { Job } from '@/types';
import React from 'react';

interface AboutJobProps {
    data: Job | undefined | null;
}

const AboutJob: React.FC<AboutJobProps> = ({
    data
}) => {
    return (
        <div className="bg-[#FDFDFD] rounded-sm p-4 h-full w-full">
            <h2 className="text-[24px] text-[#3C4144] font-medium">{data?.title ? data.title : "No data available"}</h2>
            <div className="flex justify-between w-full gap-2 items-center mb-[24px] shadow-sm">
                <span className="text-[16px] text-[#3C4144] font-medium">{data?.employmentStatus ? data.employmentStatus : "Not Mentioned"}</span>
                <span>{data?.minSalary} - {data?.maxSalary} $/Year</span>
            </div>
            <div className="flex flex-col gap-2 items-start overflow-y-auto max-h-[460px] text-[#3C4144]">
                <h2 className="text-[16px] text-[#3C4144] font-medium mb-[-4px]">Job Description:</h2>
                {data?.description ? <div className="text-[14px]" dangerouslySetInnerHTML={{ __html: data.description }}></div> : "No data available"}
            </div>
        </div >
    );
}

export default AboutJob;