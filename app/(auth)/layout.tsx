"use client";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode; 
  }
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children
}) => {

  return ( 
    <div className="bg-gray-200 h-screen flex items-center">
      <div className="min-w-[400px] mx-auto">
      {children}
      </div>
    </div>
   );
}
 
export default AuthLayout;