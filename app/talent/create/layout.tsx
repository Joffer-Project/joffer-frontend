"use client";

import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children
}) => {

  return (
    <div className="bg-gradient-to-br from-rose-500 to-sky-500 flex flex-wrap items-center justify-center h-full">

      <div className="flex flex-col flex-wrap justify-center items-center bg-[#FF7E33] sm:max-w-[400px] h-[600px] px-8">
        <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        <div className="text-[24px] text-center font-medium mb-[50px]">Let advanced Joffer algoritms find your ideal carreer fit!</div>
        <div className="text-[32px] text-center font-medium">Just Swipe!</div>
      </div>

      {/* main content */}
      <div className="bg-[#fff] w-[600px] h-[600px]">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;