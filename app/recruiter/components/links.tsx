import { cn } from "@/lib/utils";
import { Company } from "@/types";
import { Building2, Instagram, Linkedin, X, Youtube } from "lucide-react";
interface LinksProps {
    data: Company | undefined | null;
}
const Links: React.FC<LinksProps> = ({ data }) => {
    return (
        <div className="flex gap-4 justify-start items-center">
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.websiteUrl : "#"} target="_blank" rel="noreferrer">
                    <Building2 size={32} className={cn(data && data.websiteUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">Company</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.linkedInUrl : "#"} target="_blank" rel="noreferrer">
                    <Linkedin size={32} className={cn(data && data.linkedInUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">LinkedIn</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.youtubeUrl : "#"} target="_blank" rel="noreferrer">
                    <Youtube size={32} className={cn(data && data.youtubeUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">YouTube</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.instagramUrl : "#"} target="_blank" rel="noreferrer">
                    <Instagram size={32} className={cn(data && data.instagramUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">Instagram</span>
                </a>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <a href={data ? data.twitterUrl : "#"} target="_blank" rel="noreferrer">
                    <X size={32} className={cn(data && data.twitterUrl? "text-[#8FE278]" : "text-[#909390]" )} />
                    <span className="font-semibold">X</span>
                </a>
            </div>
        </div>
    );
}

export default Links;