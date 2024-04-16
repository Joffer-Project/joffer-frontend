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
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Matches } from "./matches"
import ActionBar from "./action-bar"
import Suggestions from "./suggestions"


export function TalentHome() {

  const [mobileMenu, setMobileMenu] = React.useState(false)

  return (
    <div className="flex h-screen relative">
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
        <Matches
          links={[
            {
              title: "Twitter",
              role: "UI/UX Researcher",
              date: "11.03.2024",
              icon: X,
            },
            {
              title: "LinkedIn",
              role: "Frontend Developer",
              date: "04.02.2024",
              icon: Linkedin,
            },
            {
              title: "Messages",
              role: "Backend Developer",
              date: "01.01.2024",
              icon: MessagesSquare,
            },
            {
              title: "Instagram",
              role: "Fullstack Developer",
              date: "11.03.2024",
              icon: Instagram,
            },

          ]}
        />
        <div
          className={cn(
            "flex h-[80px] items-center bg-gradient-to-r from-sky-500 to-indigo-500 mt-auto px-2"
          )}
        >
          <div className={cn("flex items-center gap-2 py-8")}>

            <Flame className="text-white" stroke="currentColor" size={42} />
            <div className="text-2xl font-medium text-white">Superlikes</div>

          </div>
        </div>
      </div>
      <div className="py-16 px-12">
        <Suggestions />
        <ActionBar />
      </div>
    </div>
  )
}