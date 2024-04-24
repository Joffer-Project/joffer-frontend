import { cn } from "@/lib/utils";
import { Talent } from "@/types";
import { Building2, Instagram, Linkedin, X, Youtube } from "lucide-react";
interface LinksProps {
    data: Talent | undefined | null;
}
const Links: React.FC<LinksProps> = ({ data }) => {
    return (
        <div className="flex gap-2 justify-center items-center w-full overflow-hidden scroll-hidden md:h-1/5 sm:h-1/6 xxs:h-[65px] xls:h-[50px]">
            
            <div className
            
            ="flex border-none rounded-[6px] flex-col gap-2 justify-center items-center bg-[#FDFDFD] cursor-pointer hover:bg-[#f4f3f3]
           md:pt-0
           xls:pt-[10%]
           xws:p-auto
           xws:pt-[6%]
           p-atuo
           w-full
           xls:w-1/5
           h-full ">
                <a href={data ? data.gitHubUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    
                    <X size={32} className={cn(data && data.gitHubUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">Github</span>
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
           h-full ">
                <a href={data ? data.personalUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Building2 size={32} className={cn(data && data.personalUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">Personal</span>
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
           h-full  ">
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
            h-full ">
                <a href={data ? data.mediumUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 ">
                    <Youtube size={32} className={cn(data && data.mediumUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">Medium</span>
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
           h-full  ">
                <a href={data ? data.dribbleUrl : "#"} target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2">
                    
                    <Instagram size={32} className={cn(data && data.dribbleUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold text-[13px] text-[#5C6062]
                    xl:visible
                    ml:visible
                    md:visible
                    xls:invisible">Dribble</span>
                </a>
            </div>
        </div>
    );
}

export default Links;