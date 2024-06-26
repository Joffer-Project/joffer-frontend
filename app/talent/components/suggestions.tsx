
import CompanySlider from '@/components/ui/company-slider'
import { Job } from '@/types'
import React from 'react'
import AboutCompany from './about-company'
import AboutJob from './about-job'
import Links from './links'
  

interface SuggestionsProps {
    data: Job | null | undefined;
}
const Suggestions: React.FC<SuggestionsProps> = ({ data }) => {

    return (
        <>
            {
                // if data is not available
                !data ? <div className=" flex justify-center items-center h-[70vh] w-full">
                    <h1 className="text-[#3C4144] text-2xl font-semibold">You swiped all, no more job offer available!🫠</h1>
                </div> :
                    <>
                        {/* big screen */}
                        < div className="bg-[#8F9293] gap-[8px] hidden lg:flex h-[70vh] overflow-hidden w-fit max-w-[1024px] mx-auto p-[8px] rounded-[10px] shadow-xl shadow-[#0c0a1b2a] 
                        ">
                            <div className="flex flex-col w-2/5 gap-[8px]
                            ">
                                <CompanySlider data={data?.company} />
                                <AboutCompany data={data?.company} />
                            </div>
                            <div className="flex flex-col w-3/5 items-center max-w-full gap-[8px]">
                                <AboutJob data={data} />
                                <Links data={data?.company} />
                            </div>
                        </div >

                        {/* tablet */}
                        < div className="bg-[#8F9293] gap-2 hidden lg:hidden
                     sm:flex h-[90vh] overflow-hidden w-fit mx-auto p-[8px] rounded-lg
                        sm:w-[98vw]
                        sm:h-[70vh]
                        sm:ml-[-40px]
                        ">

                            <div className="flex flex-col w-2/5 gap-[4px]
                            ">
                                <CompanySlider data={data?.company} />
                                <AboutCompany data={data?.company} />
                            </div>
                            <div className="flex flex-col w-3/5 gap-[4px]">
                                <AboutJob data={data} />
                                <Links data={data?.company} />
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
                             <div className="w-full overflow-y-auto border-none rounded-lg min-h-[250px] max-h-[250px]
                            ">
                                <CompanySlider data={data?.company} />
                            </div>
                            <div>
                                <Links data={data?.company} />
                            </div>
                            
                            <div className="flex flex-col h-500px w-full gap-[4px]">
                            <div>
                                <AboutCompany data={data?.company}/>
                            </div>    
                            <div>
                                <AboutJob data={data} />
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
