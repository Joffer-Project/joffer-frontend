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
import { getAccount } from "@/actions/account";



interface NewRecruiterFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const NewRecruiterForm = withPageAuthRequired(({ className, ...props }: NewRecruiterFormProps) => {

  const { user } = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const accountStore = useAccount();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (sub: any) => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/token");
        const { accessToken } = await response.json();
        if (accessToken) {
          const account = await getAccount(accessToken);
          console.log("Account:", account);
          console.log("Account:", accessToken);
          if (account) {
            accountStore.setActive(account);
            if (account.accountType === "Applicant") {
              router.push('/talent');
            } else if (account.accountType === "Company") {
              router.push('/recruiter');
            }
          } else {
            accountStore.setActive({} as any);
          }
        } else {
          accountStore.setActive({} as any);
        }
      }
      catch (error) {
        console.error("Error fetching Accounts:", error);
      }
      finally {
        setIsLoading(false);
      }
    }
    if (user) {
      fetchData(user.sub);
    }
  }, [user]);

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
