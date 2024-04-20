import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface StepsProps {
    step: number;
    setStep: (step: number) => void;
}

const Steps: React.FC<StepsProps> = ({
    step = 1,
    setStep,
}) => {
    return (
        <div className="flex justify-between items-center pt-8">

            {step > 1 && (
                <Button type="button" className="bg-[#5496EE] w-fit text-center h-[40px] border rounded-[40px] text-lg" onClick={() => setStep(step - 1)}>
                    <ChevronLeft /> Previous
                </Button>
            )}

            {step === 5 ? (
                <Button type="button" className="bg-[#5496EE] w-fit text-center h-[40px] border rounded-[40px] text-lg">
                    Preview <Eye className='ml-2' />
                </Button>
            ) : (
                <div className="flex flex-row justify-center items-center mx-auto py-6">
                    <p className="text-[22px] font-medium tracking-[5px]">
                        <span className="text-[#5496EE]">{step}</span>/5
                    </p>
                </div>
            )}

            {step === 5 ? (
                <Button type="submit" className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
                    Start
                </Button>
            ) : (
                <Button type="submit" className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg" onClick={() => setStep(step + 1)}>
                    Next <ChevronRight />
                </Button>
            )}

        </div>
    )
}

export default Steps