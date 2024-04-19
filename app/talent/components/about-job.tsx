import { Job } from '@/types';
import React from 'react';

interface AboutJobProps {
    data: Job | undefined | null;
}

const AboutJob: React.FC<AboutJobProps> = ({
    data
}) => {
    return (
        <div className="bg-white rounded-lg p-4 h-full w-full">
            <h2 className="text-2xl font-bold">{data?.title ? data.title : "No data available"}</h2>
            <div className="flex justify-between mb-4 w-full gap-2 items-center">
                <span className="text-xl font-medium">{data?.type ? data.type : "Not Mentioned"}</span>
                <span>{data?.salary ? data.salary + '$/Year' : "Not Mentioned"}</span>
            </div>
            <div className="flex flex-col gap-2 items-start overflow-y-auto max-h-[460px] text-[#3C4144]">
                <h2 className="text-lg font-semibold">Job Description:</h2>
                {data?.description ? <div dangerouslySetInnerHTML={{ __html: data.description }}></div> : "No data available"}
            </div>
        </div >
    );
}

export default AboutJob;