import Slider from '@/components/slider'
import { TalentWithJobOffer } from '@/types'
import React from 'react'
import AboutTalent from './about-talent'
import Links from './links'

interface SuggestionsProps {
    data: TalentWithJobOffer | null | undefined;
}
const Suggestions: React.FC<SuggestionsProps> = ({ data }) => {

    return (
        <>
            {
                // if data is not available
                !data ? <div className="flex justify-center items-center h-[70vh] w-full">
                    <h1 className="text-[#3C4144] text-2xl font-semibold">You swiped all, no more talent available!🫠</h1>
                </div> :
                    <>
                        {/* big screen */}
                        < div className="bg-[#8F9293] gap-[8px] hidden lg:flex h-[70vh] overflow-y-auto w-fit max-w-[1024px] mx-auto p-[8px] rounded-[10px] shadow-xl shadow-[#0c0a1b2a]">
                            <div className="flex flex-col w-2/5 gap-[8px] h-full
                            xls:max-h-[300px] bg-black rounded-lg">
                                <Slider data={data?.talentWithJobOfferId} />
                            
                            </div>
                            <div className="flex flex-col w-3/5 items-center max-w-full gap-[8px]">
                            <AboutTalent data={data?.talentWithJobOfferId.aboutMe} />
                                <Links data={data?.talentWithJobOfferId} />
                            </div>
                        </div >

                        {/* mobile */}
                        < div className="bg-[#8F9293] gap-4 lg:hidden flex h-[90vh] overflow-y-auto w-fit mx-auto p-4 rounded-lg" >
                            <div className="flex flex-col max-w-full gap-4 p4">
                                <Slider data={data.talentWithJobOfferId} />
                                <AboutTalent data={data?.talentWithJobOfferId.aboutMe} />
                                <Links data={data.talentWithJobOfferId} />
                            </div>
                        </div >
                    </>
            }

        </>
    )
}

export default Suggestions;
