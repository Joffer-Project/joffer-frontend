"use client";

import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children
}) => {

  return (
    <div className="bg-[#b48282] h-screen grid grid-cols-3 items-center justify-center px-[222px]">
      <div className="flex flex-wrap justify-center items-center bg-[#FF7E33] md:h-[650px] md:px-[60px]">
        <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        <div className="text-[24px] text-center font-medium mb-[50px]">Let advanced Joffer algorithms find your ideal career fit!</div>
        <div className="text-[32px] text-center font-medium">Just Swipe!</div>
      </div>
      {/* main content */}
      <div className="col-span-2 bg-[#fff] md:h-[650px]">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;