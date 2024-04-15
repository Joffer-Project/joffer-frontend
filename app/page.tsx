"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { getAllAccounts } from "@/actions/account";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import useAccount from "@/hooks/account-store";
import Image from "next/image";

const HomePage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const accountStore = useAccount();

  const talentClicked = () => {
    if (user) {
      router.push("/talent/create");
    } else {
      router.push(
        `/api/auth/login?returnTo=${encodeURIComponent("/talent/create")}`
      );
    }
  };

  useEffect(() => {
    const fetchData = async (sub: any) => {
      try {
        const accounts = await getAllAccounts();
        if (accounts) {
          const account = accounts.find(
            (account: any) => account.auth0Id === sub
          );
          if (account) {
            accountStore.setActive(account);
            if (account.type === "talent") {
              router.push("/talent");
            } else if (account.type === "recruiter") {
              router.push("/recruiter");
            }
          } else {
            accountStore.setActive({} as any);
          }
        }
      } catch (error) {
        console.error("Error fetching Accounts:", error);
      }
    };
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
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          </div>
          <p className="text-2xl text-stone-600 text-center">
            Your professional matchmaker!
          </p>
        </header>

        <div className="flex flex-row gap-5 flex-wrap justify-center items-center">
          <div className="border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat bg-gray-300 bg-[url('/images/landing/talent-bg.webp')] overflow-hidden shadow-xl shadow-[#00000021] hover:shadow-2xl hover:shadow-[#000000d6] hover:bg-gray-100 transition ease-in-out   hover:-translate-y-1 hover:scale-102  duration-300">
            <div
              className="flex flex-col         
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
    bg-[#ffffffba] px-8 py-12 content-center justify-center items-center"
            >
              <Button
                variant="outline"
                onClick={talentClicked}
                className="md:w-[300px] md:h-[60px] min-w-[150px] border rounded-[40px] text-white bg-[#ff7e33] mb-4 font-medium md:text-[24px] px-8 py-6 text-[18px]"
              >
                Talent
              </Button>
              <small className="md:text-[18px] text-[14px]">
                For the ones who seek new job opportunities!
              </small>
            </div>
          </div>
          <div className="border md:rounded-[60px] rounded-[40px] bg-cover bg-no-repeat bg-gray-300 bg-[url('/images/landing/talent-bg.webp')] overflow-hidden shadow-xl shadow-[#00000021] hover:shadow-2xl hover:shadow-[#000000d6] hover:bg-gray-100 transition ease-in-out   hover:-translate-y-1 hover:scale-102  duration-300">
            <div
              className="flex flex-col
              xs:w-[1000px]
    sm:w-[340px]
    md:w-[390px]
    lg:w-[430px]
    xl:w-[490px]
    2xl:w-[590px]
    sm:h-[330px]
    md:h-[400px]
    lg:h-[410px]
    xl:h-[510px]
    2xl:h-[610px]
    bg-[#ffffffba] px-8 py-12 content-center justify-center items-center"
            >
              <Button
                variant="outline"
                onClick={() => router.push(`/api/auth/login`)}
                className="md:w-[300px] md:h-[80px] min-w-[150px] border rounded-[40px] text-white bg-[#5496ee] mb-4 font-medium md:text-[24px] px-8 py-6 text-[18px]"
              >
                Recruiter
              </Button>
              <small className="md:text-[18px] text-[14px]">
                For the ones who seek new talents to work with!
              </small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
