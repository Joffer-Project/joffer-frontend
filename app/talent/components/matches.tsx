"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { buttonVariants } from "@/components/ui/button"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    date: string
    role: string
    icon: LucideIcon
  }[]
}

export function Matches({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-8 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "default", size: "icon" }),
                    "h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.date && (
                  <span className="ml-auto text-muted-foreground">
                    {link.date}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href="#"
              className={cn(
                buttonVariants({ variant: "default" }), "justify-start h-20 bg-transparent py-4"
              )}
            >
              <link.icon className="mr-4 h-14 w-14" />
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
          )
        )}
      </nav>
    </div>
  )
}