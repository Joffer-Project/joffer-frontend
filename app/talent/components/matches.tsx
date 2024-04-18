"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react"

interface NavProps {
  links: {
    title: string
    date: string
    role: string
    icon: LucideIcon
  }[]
}

const demoData = [
  {
    title: "Twitter",
    role: "UI/UX Researcher",
    date: "11.03.2024",
    logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/demo-4-890074.png',
  },
  {
    title: "LinkedIn",
    role: "Frontend Developer",
    date: "04.02.2024",
    logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/demo-4-890074.png',
  },
  {
    title: "Messages",
    role: "Backend Developer",
    date: "01.01.2024",
    logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/demo-4-890074.png',
  },
  {
    title: "Instagram",
    role: "Fullstack Developer",
    date: "11.03.2024",
    logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/demo-4-890074.png',
  },

]

export function Matches() {
  // get all matches
  const [matches, setMatches] = useState(demoData)
  return (
    <div
      className="group flex flex-col gap-4 py-8 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {matches.map((link, index) =>
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