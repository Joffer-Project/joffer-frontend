import { Slider } from '@/components/slider'
import React from 'react'
import AboutCompany from './about-company'
import Links from './links'
import AboutJob from './about-job'

export default function Suggestions() {
    return (
        <div className="bg-[#8F9293] gap-8 flex h-[70vh] p-8">
            <div className="flex flex-col max-w-[450px]">
                <Slider />
                <AboutCompany />
            </div>
            <div className="col-span-2 flex flex-col">
                <div className="grow">
                    <AboutJob />
                </div>
                <Links />
            </div>
        </div>
    )
}
