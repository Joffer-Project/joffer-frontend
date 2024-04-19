"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Match } from "@/types"
import { getMatches } from "@/actions/dashboard"
import useDashboard from "@/hooks/dashboard-store"




export function Matches() {
  const [data, setData] = useState<Match[] | null>(null);
  const dashboardStore = useDashboard();
  useEffect(() => {
    const getData = async () => {
      try {
        const token = dashboardStore.getState().token;
        if (!token) return;
        const fetchedData: Match[] = await getMatches(token);
        dashboardStore.setState({ matches: fetchedData });
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  if (!data) return <h1 className="text-[#3C4144] text-2xl font-semibold text-center m-auto">No match found</h1>;


  return (
    <div className="group flex flex-col gap-4 py-8 data-[collapsed=true]:py-2">
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {data?.length && data.map((link, index) =>
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: "default" }), "justify-start h-20 bg-transparent py-4"
            )}
          >
            <img src={link.logoUrl} className="mr-4 h-14 w-14" />
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">{link.title}</h2>
              <h4 className="text-md font-normal">{link.role}</h4>
            </div>
            {link.date && (
              <span
                className={cn(
                  "ml-auto text-background dark:text-white text-sm font-medium"
                )}
              >
                {link.date}
              </span>
            )}
          </Link>
        )}
      </nav>
    </div>
  )
}