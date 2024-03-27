import { Slider } from '@/components/slider'
import React from 'react'
import AboutCompany from './about-company'
import Links from './links'
import AboutJob from './abount-job'

export default function Suggestions() {
    return (
        <div className="bg-[#8F9293] p-3 grid grid-cols-3">
            <div className="flex flex-col">
                <div className="">
                    <Slider />
                </div>
                <div className="grow">
                    <AboutCompany />
                </div>
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
