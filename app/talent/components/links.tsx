import { cn } from "@/lib/utils";
import { Company } from "@/types";
import { AlignCenter, Building2, Instagram, Linkedin, X, Youtube } from "lucide-react";
interface LinksProps {
    data: Company | undefined | null;
}
const Links: React.FC<LinksProps> = ({ data }) => {
    return (
        <div className="flex gap-2 justify-center items-center w-full overflow-hidden scroll-hidden md:h-1/5 sm:h-1/6 xxs:h-[65px] xls:h-[50px]
        ">
            <div className="flex border-none rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] cursor-pointer hover:bg-[#f4f3f3]
           md:pt-0
           xls:pt-[10%]
           xws:p-auto
           xws:pt-[6%]
           p-atuo
           w-full
           xls:w-1/5
           h-full 

               
            ">
                <a href={data ? data.comapnyUrl : "#"} target="_blank"
                 rel="noreferrer" 
                 className="flex flex-col items-center justify-center gap-2 ">
                    
                    <Building2 size={32} align-items={AlignCenter} className={cn(data && data.comapnyUrl? "text-[#8FE278]" : "text-[#909390]")} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible
                    ">Company</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] 
            cursor-pointer hover:bg-[#f4f3f3]
           md:pt-0 
           xls:pt-[10%]
           xws:p-auto
           xws:pt-[6%]
           p-atuo
           w-full
           xls:w-1/5
           h-full 
            
            
            ">
                <a href={data ? data.linkedInUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Linkedin size={32} className={cn(data && data.linkedInUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">LinkedIn</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] 
            cursor-pointer hover:bg-[#f4f3f3] 
           md:pt-0
           xls:pt-[10%]
           xws:p-auto
           xws:pt-[6%]
           p-atuo
           w-full
           xls:w-1/5
           h-full        
            
            ">
                <a href={data ? data.youtubeUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Youtube size={32} className={cn(data && data.youtubeUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">YouTube</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] 
            cursor-pointer hover:bg-[#f4f3f3] 
            md:pt-0
            xls:pt-[10%]
            xws:p-auto
            xws:pt-[6%]
            p-atuo
            w-full
            xls:w-1/5
            h-full        
            ">
                <a href={data ? data.instaGramUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Instagram size={32} className={cn(data && data.instaGramUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">Instagram</span>
                </a>
            </div>
            <div className="flex border rounded-[6px] flex-col gap-2  items-center bg-[#FDFDFD] justify-center
            cursor-pointer hover:bg-[#f4f3f3] 
           md:pt-0
           xls:pt-[10%]
           xws:p-auto
           xws:pt-[6%]
           p-atuo
           w-full
           xls:w-1/5
           h-full        
            ">
                <a href={data ? data.twitterUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2">
                    <X size={32} className={cn(data && data.twitterUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible
                    ">X</span>
                </a>
            </div>
        </div>
    );
}

export default Links;