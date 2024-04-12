"use client";

import Loader from '@/components/ui/loader';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
interface TalentCreateLayoutProps {
  children: React.ReactNode;
}
const TalentCreateLayout: React.FC<TalentCreateLayoutProps> = ({
  children
}) => {
  const { isLoading } = useUser();

  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-gradient-to-br from-rose-500 to-sky-500 flex flex-wrap items-center justify-center h-full">

        <div className="flex flex-col justify-center items-center bg-[#FF7E33] sm:max-w-[400px] h-[400px] sm:h-[600px] px-4 sm:px-8">
          <Image src="/images/logo.png" alt="logo" width={120} height={120} className='mb-[30px] sm:mb-[50px]' />
          <div className="sm:text-[24px] text-[18px] text-center font-medium mb-[30px] sm:mb-[50px]">Let advanced Joffer algoritms find your ideal carreer fit!</div>
          <div className="sm:text-[32px] text-[24px] text-center font-medium">Just Swipe!</div>
        </div>

        {/* main content */}
        <div className="bg-[#fff] w-full md:w-[600px] h-[600px]">
          {children}
        </div>
      </div>
    </>
  );
}

export default TalentCreateLayout;