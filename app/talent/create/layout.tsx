"use client";

import Loader from "@/components/ui/loader";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
interface TalentCreateLayoutProps {
	children: React.ReactNode;
}
const TalentCreateLayout: React.FC<TalentCreateLayoutProps> = ({
	children,
}) => {
	const { isLoading } = useUser();

	return (
		<>
			{isLoading && <Loader />}
			<div
				className="bg-gradient-to-br from-[#FFCDB0] to-[#B0CFF7] flex justify-center items-center h-full
      xls:flex-col
      sm:flex-col
      md:flex-col
      lg:flex-row
      2xl:flex-row">
				<div
					className="flex flex-col justify-center items-center bg-gradient-to-br from-[#FF7E33] to-[#FF5E00] shadow-xl shadow-[#0c0a1b2a] rounded-l-lg px-14
        xls:invisible
        xls:h-[0px]
        xls:w-[0px]
        lg:visible
        xl:visible 
        2xl:visible
        lg:w-[300px]
        xl:w-[350px]
        2xl:w-[400px]

        lg:h-[500px]
        xl:h-[550px]
        2xl:h-[600px]
    ">
					<Image
						src="/images/logo-hq.png"
						alt="logo"
						width={120}
						height={120}
						className="mb-[30px] sm:mb-[50px]"
					/>
					<div className="sm:text-[24px] text-[16px] text-center font-medium mb-[30px] sm:mb-[50px] text-[#3C4144]">
						Let advanced Joffer algorithms find your ideal career
						fit!
					</div>
					<div className="sm:text-[32px] text-[24px] text-[#3C4144] text-center font-normal">
						Just Swipe!
					</div>
				</div>

				{/* main content */}
				<div
					className="bg-[#FDFDFD] shadow-xl shadow-[#0c0a1b2a] xls:rounded-lg
        lg:rounded-r-lg
        lg:rounded-l-none
        xls:w-[240px]
        xxs:w-[350px]
        sm:w-[410px]
        md:w-[500px]
        lg:w-[558px]
        xl:w-[608px]
        2xl:w-[650px]

        xls:h-[500px]
        xxs:h-[650px]
        md:h-[700px]
        lg:h-[500px]
        xl:h-[550px]
        2xl:h-[600px] ">
					{children}
				</div>
			</div>
		</>
	);
};

export default TalentCreateLayout;
