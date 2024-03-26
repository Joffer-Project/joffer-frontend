"use client"

import * as React from "react"
import {
  Instagram,
  Linkedin,
  MessagesSquare,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { LogoArea } from "./logo-area"
import { Separator } from "@/components/ui/separator"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Matches } from "./matches"
import ActionBar from "./action-bar"
import Suggestions from "./suggestions"

interface MailProps {
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function TalentHome({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`
          }}
          className={cn('bg-[#FF7626] flex flex-col',
            isCollapsed &&
            "min-w-[50px] h-full transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[80px] items-center bg-gradient-to-r from-[#E85600] to-[#8C3400]",
              isCollapsed ? "h-[60px] justify-center" : "px-2"
            )}
          >
            <LogoArea isCollapsed={isCollapsed} />
          </div>
          <Matches
            isCollapsed={isCollapsed}
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
              "flex h-[80px] items-center bg-gradient-to-r from-sky-500 to-indigo-500 mt-auto",
              isCollapsed ? "h-[60px] justify-center" : "px-2"
            )}
          >
            <div className={cn("flex items-center py-8")}>
              <img
                src="/images/logo.png"
                alt="logo"
                className={cn("h-16 w-auto")}
              />

              {!isCollapsed && (
                <div className="text-2xl font-medium text-white">Superlikes</div>
              )}

            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Suggestions />
          <ActionBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}