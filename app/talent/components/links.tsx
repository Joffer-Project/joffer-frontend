import { cn } from "@/lib/utils";
import { Company } from "@/types";
import { AlignCenter, Building2, Instagram, Linkedin, X, Youtube } from "lucide-react";
interface LinksProps {
    data: Company | undefined | null;
}
const Links: React.FC<LinksProps> = ({ data }) => {
    return (
        <div className="flex gap-2 justify-start items-start overflow-x-scroll  max-w-[600px] relative p-0 overflow-y-hidden
        no-scrollbar
        2xl:h-[162px]
        2xl:max-w-[600px]
        xl:max-w-[600px]
        xl:h-[160px]
        lg:max-w-[600px]
        lg:h-[165px]
        ">
            <div className="flex border-none rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] cursor-pointer hover:bg-[#f4f3f3]  
            2xl:min-w-[113px]
            2xl:h-[125px]
            xl:min-w-[110px]
            xl:min-h-[118px]
            lg:min-w-[101px]
            lg:min-h-[115px]
            md:min-w-[100px]
            md:pt-[9.5px]
            md:pb-[8px]
            sm:min-w-[100px]
            sm:pt-[9.5px]
            sm:pb-[8px]

               
            ">
                <a href={data ? data.comapnyUrl : "#"} target="_blank"
                 rel="noreferrer" 
                 className="flex flex-col items-center justify-center gap-2 ">
                    
                    <Building2 size={32} align-items={AlignCenter} className={cn(data && data.comapnyUrl? "text-[#8FE278]" : "text-[#909390]")} />
                    <span className="font-semibold text-[13px] text-[#5C6062]">Company</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] 
            cursor-pointer hover:bg-[#f4f3f3] 
            2xl:min-w-[113px]
            2xl:h-[125px]
            xl:min-w-[110px]
            xl:min-h-[118px]
            lg:min-w-[101px]
            lg:min-h-[115px]
            md:min-w-[100px]
            md:pt-[9.5px]
            md:pb-[8px]
            sm:min-w-[100px]
            sm:pt-[9.5px]
            sm:pb-[8px]  
            
            
            ">
                <a href={data ? data.linkedInUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Linkedin size={32} className={cn(data && data.linkedInUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]">LinkedIn</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] 
            cursor-pointer hover:bg-[#f4f3f3] 
            2xl:min-w-[113px]
            2xl:h-[125px]
            xl:min-w-[113px]
            xl:min-h-[118px]
            lg:min-w-[101px]
            lg:min-h-[115px]
            md:min-w-[100px]
            md:pt-[9.5px]
            md:pb-[8px]
            sm:min-w-[100px]
            sm:pt-[9.5px]
            sm:pb-[8px]        
            
            ">
                <a href={data ? data.youtubeUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Youtube size={32} className={cn(data && data.youtubeUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]">YouTube</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] 
            cursor-pointer hover:bg-[#f4f3f3] 
            2xl:min-w-[113px]
            2xl:h-[125px]
            xl:min-w-[113px]
            xl:min-h-[118px]
            lg:min-w-[101px]
            lg:min-h-[115px]
            md:min-w-[100px]
            md:pt-[9.5px]
            md:pb-[8px]
            sm:min-w-[100px]
            sm:pt-[9.5px]
            sm:pb-[8px]  
            
            
            
            ">
                <a href={data ? data.instaGramUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Instagram size={32} className={cn(data && data.instaGramUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]">Instagram</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2  items-center bg-[#FDFDFD] justify-center
            cursor-pointer hover:bg-[#f4f3f3] 
            2xl:min-w-[113px]
            2xl:h-[125px]
            xl:min-w-[113px]
            xl:min-h-[118px]
            lg:min-w-[101px]
            lg:min-h-[115px] 
            md:min-w-[100px]
            md:pt-[9.5px]
            md:pb-[8px]
            sm:min-w-[100px]
            sm:pt-[9.5px]
            sm:pb-[8px]  
            
            
            ">
                <a href={data ? data.twitterUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <X size={32} className={cn(data && data.twitterUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]">X</span>
                </a>
            </div>
        </div>
    );
}

export default Links;