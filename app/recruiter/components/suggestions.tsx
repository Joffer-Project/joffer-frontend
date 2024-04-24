import Slider from '@/components/slider'
import React from 'react'
import AboutTalent from './about-talent'
import Links from './links'
import { TalentWithJobOffer, Talent } from '@/types'

interface SuggestionsProps {
    data: TalentWithJobOffer | null | undefined;
}
const Suggestions: React.FC<SuggestionsProps> = ({ data }) => {

    return (
        <>
            {
                // if data is not available
                !data ? <div className="flex justify-center items-center h-[70vh] w-full">
                    <h1 className="text-[#3C4144] text-2xl font-semibold">No Talent Available</h1>
                </div> :
                    <>
                        {/* big screen */}
                        < div className="bg-[#8F9293] gap-4 hidden lg:flex h-[70vh] overflow-y-auto w-fit mx-auto p-4 rounded-lg">
                            <div className="flex flex-col max-w-[450px] gap-4">
                                <Slider data={data?.talentWithJobOfferId} />
                                <AboutTalent data={data?.talentWithJobOfferId.aboutMe} />
                            </div>
                            <div className="flex flex-col max-w-full gap-4">
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
