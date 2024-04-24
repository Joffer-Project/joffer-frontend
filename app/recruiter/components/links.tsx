import { cn } from "@/lib/utils";
import { Talent } from "@/types";
import { Building2, Instagram, Linkedin, X, Youtube } from "lucide-react";
interface LinksProps {
    data: Talent | undefined | null;
}
const Links: React.FC<LinksProps> = ({ data }) => {
    return (
        <div className="flex gap-4 justify-start items-center">
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.gitHubUrl : "#"} target="_blank" rel="noreferrer">
                    <X size={32} className={cn(data && data.gitHubUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">Github</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.personalUrl : "#"} target="_blank" rel="noreferrer">
                    <Building2 size={32} className={cn(data && data.personalUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">Personal</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.linkedInUrl : "#"} target="_blank" rel="noreferrer">
                    <Linkedin size={32} className={cn(data && data.linkedInUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">LinkedIn</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.mediumUrl : "#"} target="_blank" rel="noreferrer">
                    <Youtube size={32} className={cn(data && data.mediumUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">Medium</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.dribbleUrl : "#"} target="_blank" rel="noreferrer">
                    <Instagram size={32} className={cn(data && data.dribbleUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">Dribble</span>
                </a>
            </div>
        </div>
    );
}

export default Links;