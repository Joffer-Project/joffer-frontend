"use client"

import {
  Menu,
  X
} from "lucide-react"

import { getJobOffer, talentDislike, talentLike } from "@/actions/talent"
import useTalent from "@/hooks/talent-store"
import { cn } from "@/lib/utils"
import { Job } from "@/types"
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client"
import { HTMLAttributes, useEffect, useState } from "react"
import ActionBar from "./action-bar"
import { LogoArea } from "./logo-area"
import { Matches } from "./matches"
import Suggestions from "./suggestions"


interface NewTalentHomeProps extends HTMLAttributes<HTMLDivElement> { }

const TalentHome = withPageAuthRequired(({ className, ...props }: NewTalentHomeProps) => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [data, setData] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const talentStore = useTalent();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/token");
        const { accessToken } = await response.json();
        if (accessToken) {
          talentStore.setState({ token: accessToken });
          const fetchedData: Job[] = await getJobOffer(accessToken);
          talentStore.setState({ jobOffers: fetchedData });
          setData(fetchedData[0]);
        } else {
          talentStore.setState({ token: "" });
        }
      }
      catch (error) {
        console.error("Error fetching token in dashboard:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const likeAction = async (like: boolean) => {
    try {
      setLoading(true);
      const token = talentStore.getState().token;
      if (!token) return;
      const jobOfferId = data?.id;
      let res = undefined;

      if (like) {
        res = await talentLike(token, jobOfferId);
      } else {
        res = await talentDislike(token, jobOfferId);
      }
      if (res) {
        const fetchedData: Job[] = await getJobOffer(token);
        talentStore.setState({ jobOffers: fetchedData });
        setData(fetchedData[0]);
      }
    } catch (error) {
      console.error("Error liking job offer:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex relative">
      {/* mobile menu icon */}
      <div className="absolute top-4 left-4 cursor-pointer block 2xl:hidden border border-black rounded-md p-1 hover:bg-white hover:text-[#FF7626]" onClick={() => setMobileMenu(true)}>
        <Menu />
      </div>
      <div className={cn("bg-gradient-to-br from-[#FF7E33] to-[#FF5E00] max-h-[100vh] min-w-[400px] 2xl:flex flex-col hidden", mobileMenu && "flex absolute top-0 left-0 w-full h-full z-50")}>
        <div
          className={cn(
            "flex h-[80px] items-center bg-gradient-to-br from-[#E85600] to-[#8C3400] px-2 relative"
          )}
        >
          <LogoArea />
          <div className={cn(
            "absolute top-6 xls:right-[25vw] xws:right-[10vw] xs:right-[2vw] xl:right-[2vw] cursor-pointer block 2xl:hidden text-white border border-white rounded-full p-1 hover:bg-white hover:text-[#FF7626]"
          )} onClick={() => setMobileMenu(false)}>
            <X />
          </div>
        </div>
        <Matches />
      </div>
      <div className="py-16 px-12 w-full">
        {
          loading ? <div className="flex justify-center items-center h-[70vh] w-full">
            <h1 className="text-[#3C4144] text-2xl font-semibold">
              <img src="/images/loader.gif" alt="loading" />
            </h1>
          </div> : <Suggestions data={data} />
        }
        <ActionBar likeAction={likeAction} />
      </div>
    </div>
  )
});

export default TalentHome;