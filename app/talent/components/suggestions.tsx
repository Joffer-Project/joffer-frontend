import { Slider } from '@/components/slider'
import React from 'react'
import AboutCompany from './about-company'
import Links from './links'
import AboutJob from './about-job'

export default function Suggestions() {
    return (
        <>
            {/* big screen */}
            <div className="bg-[#8F9293] gap-4 hidden lg:flex h-[70vh] overflow-y-auto w-fit mx-auto p-4 rounded-lg">
                <div className="flex flex-col max-w-[450px] gap-4">
                    <Slider />
                    <AboutCompany />
                </div>
                <div className="flex flex-col max-w-full gap-4">
                    <AboutJob />
                    <Links />
                </div>
            </div>

            {/* mobile */}
            <div className="bg-[#8F9293] gap-4 lg:hidden flex h-[90vh] overflow-y-auto w-fit mx-auto p-4 rounded-lg">
                <div className="flex flex-col max-w-full gap-4 p4">
                    <Slider />
                    <AboutCompany />
                    <AboutJob />
                    <Links />
                </div>
            </div>

        </>
    )
}
