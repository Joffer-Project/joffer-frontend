import { TalentWithJobOffer } from '@/types';
import React from 'react';
import AboutTalent from './about-talent';
import Links from './links';

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
                            <div className="flex w-2/5 gap-[8px] h-full
                            xls:max-h-[100%] bg-black rounded-lg overflow-hidden object-contain" >
                                {
                                    // if image is not available
                                    !data?.talentWithJobOfferId.avatarUrl ? <img className='object-cover h-full w-full' src="https://assets.artworkarchive.com/image/upload/t_jpg_large/v1605300238/user_43577/contact_images/dahli_x4uneu.jpg" alt="" /> :
                                        <img className='object-cover h-full w-full' src={data?.talentWithJobOfferId.avatarUrl} alt="" />
                                }
                            </div>
                            <div className="flex flex-col w-3/5 items-center max-w-full gap-[8px]">
                            <AboutTalent data={data?.talentWithJobOfferId.aboutMe} />
                                <Links data={data?.talentWithJobOfferId} />
                            </div>
                        </div >

                        {/* tablet */}
                        < div className="bg-[#8F9293] hidden gap-2 lg:hidden
                     sm:flex h-[90vh] overflow-y-auto w-fit mx-auto p-[8px]
                     flex-row rounded-lg
                        sm:w-[98vw]
                        sm:h-[70vh]
                        sm:ml-[-40px]
                        ">

                            <div className="flex flex-col w-3/5 h-full gap-[8px]
                            ">
                                <div className="flex flex-col gap-[8px] h-full
                                xls:max-h-[100%] bg-black rounded-lg overflow-hidden object-contain" >
                               {
                                    // if image is not available
                                    !data?.talentWithJobOfferId.avatarUrl ? <img className='object-cover h-full w-full' src="https://assets.artworkarchive.com/image/upload/t_jpg_large/v1605300238/user_43577/contact_images/dahli_x4uneu.jpg" alt="" /> :
                                        <img className='object-cover h-full w-full' src={data?.talentWithJobOfferId.avatarUrl} alt="" />
                                }
                                </div>
                                <Links data={data.talentWithJobOfferId} />
                            </div>
                            <div className="flex flex-col w-3/5 gap-[4px]">
                            <AboutTalent data={data?.talentWithJobOfferId.aboutMe} />
                                
                            </div>
                        </div>

                        {/* mobile */}
                        < div className="bg-[#8F9293] gap-4 sm:hidden flex h-[90vh] overflow-y-auto w-fit mx-auto p-2 rounded-lg
                        xls:h-[300px] 
                        xls:w-[300px]
                        xls:ml-[-30px]
                        xxs:w-[91.5vw]
                        xxs:h-[80vh]
                        xs:w-[95vw]
                        sm:w-[95vw]
                                       
                        " >
                            <div className="flex flex-col max-w-full gap-2 sm:flex 
                            sm:flex-row 
                            sm:flex-wrap
                             ">

                            <div className='flex flex-row'>
                            <div className="w-full overflow-y-auto border-none rounded-lg min-h-[250px] max-h-[250px]
                            ">
                                <div className="flex flex-col gap-[8px] h-full
                                xls:max-h-[100%] bg-black rounded-lg overflow-y-auto object-contain" >
                              {
                                    // if image is not available
                                    !data?.talentWithJobOfferId.avatarUrl ? <img className='object-cover h-full w-full' src="https://assets.artworkarchive.com/image/upload/t_jpg_large/v1605300238/user_43577/contact_images/dahli_x4uneu.jpg" alt="" /> :
                                        <img className='object-cover h-full w-full' src={data?.talentWithJobOfferId.avatarUrl} alt="" />
                                }
                              </div>
                                <div>
                            <Links data={data.talentWithJobOfferId} />
                            </div>
                            </div>
                             
                            </div>
                            <div>
                            <Links data={data.talentWithJobOfferId} />
                            </div>
                            
                            <div className="flex flex-col h-full w-full gap-[4px] overflow-y-auto">
                            <div className='h-full'>
                            <AboutTalent data={data?.talentWithJobOfferId.aboutMe} />
                            </div>    
                                
                            </div>
                                
                            </div>
                        </div >
                    </>
            }

        </>
    )
}

export default Suggestions;
