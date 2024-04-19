"use client"

import * as React from "react"
import {
  Flame,
  Instagram,
  Linkedin,
  Menu,
  MessagesSquare,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { LogoArea } from "./logo-area"
import { Matches } from "./matches"
import ActionBar from "./action-bar"
import Suggestions from "./suggestions"
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { HTMLAttributes, useEffect, useState } from "react"
import useTalent from "@/hooks/talent-store"
import { Job } from "@/types"
import { getJobOffer, talentDislike, talentLike } from "@/actions/talent"


interface NewTalentHomeProps extends HTMLAttributes<HTMLDivElement> { }

const TalentHome = withPageAuthRequired(({ className, ...props }: NewTalentHomeProps) => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [data, setData] = useState<Job | null>(null);
  const talentStore = useTalent();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/token");
        const { accessToken } = await response.json();
        if (accessToken) {
          talentStore.setState({ token: accessToken });
          const fetchedData: Job[] = await getJobOffer(accessToken);
          talentStore.setState({ jibOffers: fetchedData });
          setData(fetchedData[0]);
        } else {
          talentStore.setState({ token: "" });
        }
      }
      catch (error) {
        console.error("Error fetching token in dashboard:", error);
      }
    }
    fetchData();
  }, []);

  const likeAction = async (like: boolean) => {
    try {
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
        talentStore.setState({ jibOffers: fetchedData });
        setData(fetchedData[0]);
      }
    } catch (error) {
      console.error("Error liking job offer:", error);
    }
  }

  return (
    <div className="flex relative">
      {/* mobile menu icon */}
      <div className="absolute top-4 left-4 cursor-pointer block 2xl:hidden border border-black rounded-md p-1 hover:bg-white hover:text-[#FF7626]" onClick={() => setMobileMenu(true)}>
        <Menu />
      </div>
      <div className={cn("bg-[#FF7626] min-w-[400px] 2xl:flex flex-col hidden", mobileMenu && "flex absolute top-0 left-0 w-full h-full z-50")}>
        <div
          className={cn(
            "flex h-[80px] items-center bg-gradient-to-r from-[#E85600] to-[#8C3400] px-2 relative"
          )}
        >
          <LogoArea />
          <div className={cn(
            "absolute top-6 right-4 cursor-pointer block 2xl:hidden text-white border border-white rounded-full p-1 hover:bg-white hover:text-[#FF7626]"
          )} onClick={() => setMobileMenu(false)}>
            <X />
          </div>
        </div>
        <Matches />
        <div
          className={cn(
            "flex h-[80px] items-center bg-gradient-to-r from-sky-500 to-indigo-500 mt-auto px-2"
          )}
        >
          <div className={cn("flex items-center gap-2 py-8 cursor-not-allowed")}>

            <Flame className="text-white" stroke="currentColor" size={42} />
            <div className="text-2xl font-medium text-white">Superlikes</div>

          </div>
        </div>
      </div>
      <div className="py-16 px-12 w-full">
        <Suggestions data={data} />
        <ActionBar likeAction={likeAction} />
      </div>
    </div>
  )
});

export default TalentHome;