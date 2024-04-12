"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';

import { getAllAccounts } from "@/actions/account";
import { Button } from "@/components/ui/button"
import Loader from "@/components/ui/loader";
import useAccount from "@/hooks/account-store";

const HomePage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const accountStore = useAccount();

  const talentClicked = () => {
    if (user) {
      router.push('/talent/create');
    } else {
      router.push(`/api/auth/login?returnTo=${encodeURIComponent('/talent/create')}`);
    }
  }

  useEffect(() => {
    const fetchData = async (sub: any) => {
      try {
        const accounts = await getAllAccounts();
        if (accounts) {
          const account = accounts.find((account: any) => account.auth0Id === sub);
          if (account) {
            accountStore.setActive(account);
            if (account.type === "talent") {
              router.push('/talent');
            } else if (account.type === "recruiter") {
              router.push('/recruiter');
            }
          } else {
            accountStore.setActive({} as any);
          }
        }
      }
      catch (error) {
        console.error("Error fetching Accounts:", error);
      }
    }
    if (user) {
      fetchData(user.sub);
    }
  }, [user, accountStore]);


  return (
    <>
      {isLoading && <Loader />}
      <main className="flex min-h-screen flex-col items-center justify-center p-18 md:p-24 bg-gradient-to-br from-rose-500 to-sky-500">

        <header className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">JOFFER</h1>
          <p className="text-xl text-white text-center">Your professional matchmaker!</p>
        </header>

        <div className="flex flex-row gap-12 flex-wrap justify-center items-center">

          <div className="border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat bg-gray-300 bg-[url('/images/landing/talent-bg.webp')] overflow-hidden">
            <div className="flex flex-col min-h-[400px] max-h-[610px] min-w-[400px] md:max-w-[610px] bg-[#ffffffba] px-8 py-12 content-center justify-center items-center">
              <Button variant="outline" onClick={talentClicked} className="md:w-[300px] md:h-[80px] min-w-[150px] border rounded-[40px] text-white bg-[#ff7e33] mb-4 font-medium md:text-[24px] px-8 py-6 text-[18px]">Talent</Button>
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
    </>
  );
}

export default HomePage;
