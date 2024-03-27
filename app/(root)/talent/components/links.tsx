import { Building2, Instagram, Linkedin, X, Youtube } from "lucide-react";

const Links = () => {
    return (
        <div className="flex gap-4 justify-start items-center">
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <Building2 size={32} />
                <span className="font-semibold">Company</span>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <Linkedin size={32} />
                <span className="font-semibold">LinkedIn</span>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <Youtube size={32} />
                <span className="font-semibold">YouTube</span>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <Instagram size={32} />
                <span className="font-semibold">Instagram</span>
            </div>
            <div className="flex border rounded-[15px] flex-col gap-2 justify-center items-center bg-white p-4 min-w-[110px]">
                <X size={32} />
                <span className="font-semibold">X</span>
            </div>
        </div>
    );
}   
 
export default Links;