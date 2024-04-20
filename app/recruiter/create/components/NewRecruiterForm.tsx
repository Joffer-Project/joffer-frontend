"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Essentials from "./Essentials";
import Industries from "./Industries";
import Roles from "./Roles";
import ImagesLinks from "./ImagesLinks";
import AboutInfo from "./AboutInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import useAccount from "@/hooks/account-store";



interface NewRecruiterFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const NewRecruiterForm = withPageAuthRequired(({ className, ...props }: NewRecruiterFormProps) => {

  const { user, isLoading } = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const accountStore = useAccount();

  useEffect(() => {
    if (accountStore.active && accountStore.active.auth0Id === user?.sub) {
      if (accountStore.active.accountType === "Applicant") {
        router.push('/talent');
      } else if (accountStore.active.accountType === "talent") {
        router.push('/talent');
      }
    }
  }, [accountStore]);

  const updateStep = (step: number) => {
    setStep(step);
  };

  return (
    <>
      <div className={cn("flex flex-col gap-6 p-4 md:p-12 h-full justify-center", className)} {...props}>

        {step === 1 && <Essentials setStep={updateStep} />}

        {step === 2 && <Industries setStep={updateStep} />}

        {step === 3 && <Roles setStep={updateStep} />}

        {step === 4 && <ImagesLinks setStep={updateStep}  />} 

        {step === 5 && <AboutInfo setStep={updateStep} />}
      </div>
    </>
  );
});

export default NewRecruiterForm;
