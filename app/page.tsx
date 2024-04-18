"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import { getAccount } from "@/actions/account";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import useAccount from "@/hooks/account-store";
import { getAccessToken } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
        const response = await fetch("/api/token");
        const { accessToken } = await response.json();
        if (accessToken) {
          const account = await getAccount(accessToken);
          if (account) {
            accountStore.setActive(account[0]);
            if (account[0].accountType === "talent") {
              router.push('/talent');
            } else if (account[0].accountType === "recruiter") {
              router.push('/recruiter');
            }
          } else {
            accountStore.setActive({} as any);
          }
        } else {
          accountStore.setActive({} as any);
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFCDB0] to-[#B0CFF7]">

        <header className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center space-x-4">
            <h1 className="text-6xl font-regular text-stone-950">JOFFER</h1>
            <Image src="/images/landing/logo-hq.png" alt="logo" width={50} height={50} />
          </div>
          <p className="text-2xl text-stone-600 text-center">Your professional matchmaker!</p>
        </header>

        <div className="flex flex-row gap-5 flex-wrap justify-center items-center">

          <div className="min-w-[367px] min-h-[150px] border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat  bg-[url('/images/landing/talent-bg.webp')] overflow-hidden shadow-xl shadow-[#00000021] hover:shadow-2xl hover:shadow-[#000000d6] transition-all ease-in-out   hover:-translate-y-1 hover:scale-102  duration-500">
            <div className="flex flex-col         
    sm:w-[350px]
    md:w-[390px]
    lg:w-[430px]</div>
    xl:w-[490px]
    2xl:w-[590px]
    sm:h-[340px]
    md:h-[400px]
    lg:h-[410px]
    xl:h-[510px]
    2xl:h-[610px]
    bg-[#ffffffba] px-8 py-12 content-center justify-center items-center">
              <Button variant="outline" onClick={talentClicked} className="md:w-[300px] md:h-[80px] min-w-[100px] border-none rounded-[40px] text-white bg-gradient-to-br from-[#FF7E33] to-[#FF5E00] mb-2 font-medium md:text-[24px] px-8 py-6 text-[18px]
                hover:bg-gradient-to-br hover:from-[#FF5E00] hover:to-[#B54300] hover:text-white">Talent</Button>
              <small className="font-normal text-stone-500 md:text-[16px] text-[14px]">For the ones who seek new job opportunities!</small>
            </div>
          </div>
          <div className="border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat  bg-[url('/images/landing/recruiter-bg.webp')] overflow-hidden shadow-xl shadow-[#00000021] hover:shadow-2xl hover:shadow-[#000000d6]  transition-all ease-in-out   hover:-translate-y-1 hover:scale-102  duration-500 ">
            <div className="flex flex-col
    sm:w-[350px]
    md:w-[390px]
    lg:w-[430px]
    xl:w-[490px]
    2xl:w-[590px]
    sm:h-[340px]
    md:h-[400px]
    lg:h-[410px]
    xl:h-[510px]
    2xl:h-[610px]
    bg-[#ffffffba] px-8 py-12 content-center justify-center items-center">
              <Button variant="outline" onClick={() => router.push(`/api/auth/login`)} className="md:w-[300px] md:h-[80px] min-w-[10 0px] border rounded-[40px] text-white bg-gradient-to-br from-[#5496EE] to-[#0063E6] mb-2 font-medium md:text-[24px] px-8 py-6 text-[18px]
                hover:bg-gradient-to-br hover:from-[#005AD1] hover:to-[#00367F] hover:text-white">Recruiter</Button>
              <small className="font-normal text-stone-500 md:text-[16px] text-[14px]">For the ones who seek new talents to work with!</small>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default HomePage;