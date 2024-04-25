import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Company } from '@/types';
import React from 'react';
interface AboutCompanyProps {
    data: Company | undefined;
}

const AboutCompany: React.FC<AboutCompanyProps> = ({ data }) => {
    return (
        <div className="bg-[#FDFDFD] rounded-sm px-4 h-full">


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger><h1 className="text-[#616161] text-[16px] font-medium">About {data?.name ? data.name : "Company"}</h1></AccordionTrigger>
                    <AccordionContent>
                        <div className="overflow-y-auto max-h-[100px] text-[14px] text-[#7F7F7F]">
                        How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.
                        How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.How are you hakan, this job is only for you.
                            {data?.description ? data.description : "No data available"}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default AboutCompany;