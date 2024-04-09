"use client";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Home() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-18 md:p-24 bg-gradient-to-br from-rose-500 to-sky-500">
      {/* header */}
      <header className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">JOFFER</h1>
        <p className="text-xl text-white text-center">Your professional matchmaker!</p>
      </header>
      {/* main content */}
      <div className="flex flex-row gap-12 flex-wrap justify-center items-center">

        <div className="border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat bg-gray-300 bg-[url('/images/landing/talent-bg.webp')] overflow-hidden">
          <div className="flex flex-col min-h-[400px] max-h-[610px] min-w-[400px] md:max-w-[610px] bg-[#ffffffba] px-8 py-12 content-center justify-center items-center">
            <Button variant="outline" onClick={() => router.push(`/api/auth/login`)} className="md:w-[300px] md:h-[80px] min-w-[150px] border rounded-[40px] text-white bg-[#ff7e33] mb-4 font-medium md:text-[24px] px-8 py-6 text-[18px]">Talent</Button>
            <small className="md:text-[18px] text-[14px]">For the ones who seek new job opportunities!</small>
          </div>
        </div>
        
        <div className="border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat bg-gray-300 bg-[url('/images/landing/recuriter-bg.webp')] overflow-hidden">
          <div className="flex flex-col min-h-[400px] max-h-[610px] min-w-[400px] md:max-w-[610px] bg-[#ffffffba] px-8 py-12 content-center justify-center items-center">
            <Button variant="outline" onClick={() => router.push(`/api/auth/login`)} className="md:w-[300px] md:h-[80px] min-w-[150px] border rounded-[40px] text-white bg-[#5496ee] mb-4 font-medium md:text-[24px] px-8 py-6 text-[18px]">Recruiter</Button>
            <small className="md:text-[18px] text-[14px]">For the ones who seek new talents to work with!</small>
          </div>
        </div>

      </div>
    </main>
  );
}