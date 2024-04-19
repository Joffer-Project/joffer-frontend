import Slider from '@/components/slider'
import React, { useEffect, useState } from 'react'
import AboutCompany from './about-company'
import Links from './links'
import AboutJob from './about-job'
import useDashboard from '@/hooks/dashboard-store'
import { Job } from '@/types'
import { getJobOffer } from '@/actions/dashboard'

export default function Suggestions() {
    const [data, setData] = useState<Job | null>(null);
    const dashboardStore = useDashboard();
    useEffect(() => {
        const getData = async () => {
            try {
                const token = dashboardStore.getState().token;
                if (!token) return;
                const fetchedData: Job = await getJobOffer(token);
                dashboardStore.setState({ activeJobOffer: fetchedData });
                setData(fetchedData);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);
    return (
        <>
            {
                // if data is not available
                !data ? <div className="flex justify-center items-center h-[70vh] w-full">
                    <h1 className="text-[#3C4144] text-2xl font-semibold">No Job Offer Available</h1>
                </div> :
                    <>
                        {/* big screen */}
                        < div className="bg-[#8F9293] gap-4 hidden lg:flex h-[70vh] overflow-y-auto w-fit mx-auto p-4 rounded-lg">
                            <div className="flex flex-col max-w-[450px] gap-4">
                                <Slider data={data?.company} />
                                <AboutCompany data={data?.company} />
                            </div>
                            <div className="flex flex-col max-w-full gap-4">
                                <AboutJob data={data} />
                                <Links data={data?.company} />
                            </div>
                        </div >

                        {/* mobile */}
                        < div className="bg-[#8F9293] gap-4 lg:hidden flex h-[90vh] overflow-y-auto w-fit mx-auto p-4 rounded-lg" >
                            <div className="flex flex-col max-w-full gap-4 p4">
                                <Slider data={data?.company} />
                                <AboutCompany data={data?.company} />
                                <AboutJob data={data} />
                                <Links data={data?.company} />
                            </div>
                        </div >
                    </>
            }

        </>
    )
}
