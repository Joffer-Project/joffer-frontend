"use client"

import * as React from "react"
import {
  Flame,
  LogOut,
  Menu,
  Plus,
  PlusCircle,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { LogoArea } from "./logo-area"
import { Matches } from "./matches"
import ActionBar from "./action-bar"
import Suggestions from "./suggestions"
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { HTMLAttributes, useEffect, useState } from "react"
import useRecruiter from "@/hooks/recruiter-store"
import { Industry, Job, Role } from "@/types"
import { getTalentMatch, recruiterDislike, recruiterLike } from "@/actions/recruiter"
import { Button } from "@/components/ui/button"
import { JobPostModal } from "@/components/modals/job-post"
import { getIndustries } from "@/actions/industry"
import { getRoles } from "@/actions/roles"


interface NewRecruiterHomeProps extends HTMLAttributes<HTMLDivElement> { }

const RecruiterHome = withPageAuthRequired(({ className, ...props }: NewRecruiterHomeProps) => {

  // return under development message

  // return (
  //   <div className="flex flex-col gap-10 justify-center items-center h-screen text-center">
  //     <h1 className="text-[#3C4144] text-2xl font-semibold">Your account has been created successfully. <br></br> This talent matching feature is under development.</h1>

  //     {/* logout */}
  //     <a href="/api/auth/logout" className="text-[#FF7626] text-2xl font-semibold">
  //     <Button className="bg-[#5496EE] w-fit text-center h-[40px] border rounded-[40px] text-lg"><LogOut className="w-6 h-6 mr-2" />Logout</Button>
  //     </a>
  //   </div>
  // )

  const [mobileMenu, setMobileMenu] = useState(false)
  const [data, setData] = useState<Job | null>(null);
  const [industryData, setIndustryData] = useState<Industry[] | null>(null);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const recruiterStore = useRecruiter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/token");
        const { accessToken } = await response.json();
        if (accessToken) {
          recruiterStore.setState({ token: accessToken });
          const fetchedData: Job[] = await getTalentMatch(accessToken);
          recruiterStore.setState({ jobOffers: fetchedData });

          // fetch industry data
          const fetchedIndData: Industry[] = await getIndustries();
          recruiterStore.setState({ industries: fetchedIndData });

          // fetch roles data
          const fetchedRolesData: Role[] = await getRoles();
          recruiterStore.setState({ roles: fetchedRolesData });

          setData(fetchedData[0]);
        } else {
          recruiterStore.setState({ token: "" });
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
      const token = recruiterStore.getState().token;
      if (!token) return;
      const jobOfferId = data?.id;
      let res = undefined;

      if (like) {
        res = await recruiterLike(token, jobOfferId);
      } else {
        res = await recruiterDislike(token, jobOfferId);
      }
      if (res) {
        const fetchedData: Job[] = await getTalentMatch(token);
        recruiterStore.setState({ jobOffers: fetchedData });
        setData(fetchedData[0]);
      }
    } catch (error) {
      console.error("Error liking job offer:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <JobPostModal
        isOpen={modal}
        onClose={() => setModal(false)}
        industries={recruiterStore.getState().industries}
        roles={recruiterStore.getState().roles}
        token={recruiterStore.getState().token}
      />

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
            onClick={() => setModal(true)}
            className={cn(
              "flex h-[80px] items-center cursor-pointer  bg-gradient-to-r from-sky-500 to-indigo-500 mt-auto px-2"
            )}
          >
            <div className={cn("flex items-center gap-4 py-8hover:scale-[0.9]")}>

              <PlusCircle className="text-white" stroke="currentColor" size={42} />
              <div className="text-2xl font-medium text-white">Add New Job</div>

            </div>
          </div>
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
    </>
  )
});

export default RecruiterHome;