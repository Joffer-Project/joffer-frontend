"use client";

import * as React from "react";
import { Flame, LogOut, Menu, Plus, PlusCircle, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { LogoArea } from "./logo-area";
import { Matches } from "./matches";
import ActionBar from "./action-bar";
import Suggestions from "./suggestions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { HTMLAttributes, useEffect, useState } from "react";
import useRecruiter from "@/hooks/recruiter-store";
import { Company, Industry, Job, Role, Talent, TalentWithJobOffer } from "@/types";
import {
  getRecruiter,
  getTalentMatch,
  recruiterDislike,
  recruiterLike,
} from "@/actions/recruiter";
import { Button } from "@/components/ui/button";
import { JobPostModal } from "@/components/modals/job-post";
import { getIndustries, getIndustriesByAccount } from "@/actions/industry";
import { getRoles } from "@/actions/roles";
import { useRouter } from "next/navigation";

interface NewRecruiterHomeProps extends HTMLAttributes<HTMLDivElement> {}

const RecruiterHome = withPageAuthRequired(
  ({ className, ...props }: NewRecruiterHomeProps) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [data, setData] = useState<TalentWithJobOffer | null>(null);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const recruiterStore = useRecruiter();
    const router = useRouter();
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch("/api/token");
          const { accessToken } = await response.json();
          if (accessToken) {
            const fetchedRecruiterDetails: Company = await getRecruiter(
              accessToken
            );
            if (
              Object.keys(fetchedRecruiterDetails).length > 0 &&
              fetchedRecruiterDetails.id
            ) {
              recruiterStore.setState({ token: accessToken });
              recruiterStore.setState({
                activeRecruiter: fetchedRecruiterDetails,
              });

              // Api call
              const fetchedData: TalentWithJobOffer[] = await getTalentMatch(accessToken);
              recruiterStore.setState({ talents: fetchedData });
              setData(fetchedData[0]);
              recruiterStore.setState({ activeTalent: fetchedData[0] });
              
            } else {
              router.push("/recruiter/create");
            }
          } else {
            recruiterStore.setState({ token: "" });
            router.push("/");
          }
        } catch (error) {
          console.error("Error fetching token in dashboard:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    const likeAction = async (like: boolean) => {
      try {
        setLoading(true);
        const token = recruiterStore.getState().token;
        if (!token) return;
        const data = recruiterStore.getState().activeTalent;
        const jobOfferId = data?.jobOfferId;
        console.log("like action in recruiter home", data);
        // const jobOfferId = data?.id;
        // let res = undefined;

        // if (like) {
        //   res = await recruiterLike(token, jobOfferId);
        // } else {
        //   res = await recruiterDislike(token, jobOfferId);
        // }
        // if (res) {
        //   const fetchedData: Job[] = await getTalentMatch(token);
        //   recruiterStore.setState({ jobOffers: fetchedData });
        //   setData(fetchedData[0]);
        // }
      } catch (error) {
        console.error("Error liking job offer:", error);
      } finally {
        setLoading(false);
      }
    };

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
          <div
            className="absolute top-4 left-4 cursor-pointer block 2xl:hidden border border-black rounded-md p-1 hover:bg-white hover:text-[#FF7626]"
            onClick={() => setMobileMenu(true)}
          >
            <Menu />
          </div>
          <div
            className={cn(
              "bg-[#FF7626] min-w-[400px] 2xl:flex flex-col hidden",
              mobileMenu && "flex absolute top-0 left-0 w-full h-full z-50"
            )}
          >
            <div
              className={cn(
                "flex h-[80px] items-center bg-gradient-to-r from-[#E85600] to-[#8C3400] px-2 relative"
              )}
            >
              <LogoArea />
              <div
                className={cn(
                  "absolute top-6 right-4 cursor-pointer block 2xl:hidden text-white border border-white rounded-full p-1 hover:bg-white hover:text-[#FF7626]"
                )}
                onClick={() => setMobileMenu(false)}
              >
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
              <div
                className={cn("flex items-center gap-4 py-8hover:scale-[0.9]")}
              >
                <PlusCircle
                  className="text-white"
                  stroke="currentColor"
                  size={42}
                />
                <div className="text-2xl font-medium text-white">
                  Add New Job
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 px-12 w-full">
            {loading ? (
              <div className="flex justify-center items-center h-[70vh] w-full">
                <h1 className="text-[#3C4144] text-2xl font-semibold">
                  <img src="/images/loader.gif" alt="loading" />
                </h1>
              </div>
            ) : (
              <Suggestions data={data} />
            )}
            <ActionBar
              likeAction={likeAction}
            />
          </div>
        </div>
      </>
    );
  }
);

export default RecruiterHome;
