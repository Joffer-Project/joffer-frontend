"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/actions/user";
import toast from "react-hot-toast";
import Steps from "./Steps";
import Essentials from "./Essentials";
import Industries from "./Industries";
import Roles from "./Roles";
import ImagesLinks from "./ImagesLinks";
import AboutInfo from "./AboutInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loader from "@/components/ui/loader";
import useAccount from "@/hooks/account-store";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(100),
  password: z.string().min(8).max(100),
  description: z.string().min(20).max(200),
  profileImage: z.string().url(),
  image2Url: z.string().url(),
  image3Url: z.string().url(),
  image4Url: z.string().url(),
  image5Url: z.string().url(),
  industries: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  roles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  email: "",
  name: "",
  password: "",
  description: "",
  profileImage: "",
  image2Url: "",
  image3Url: "",
  image4Url: "",
  image5Url: "",
  industries: [],
  roles: []
};

interface NewTalentFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const NewTalentForm = withPageAuthRequired(({ className, ...props }: NewTalentFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const accountStore = useAccount();

  useEffect(() => {
    if (accountStore.active && accountStore.active.auth0Id === user?.sub) {
      if (accountStore.active.accountType === "talent") {
        router.push('/talent');
      } else if (accountStore.active.accountType === "recruiter") {
        router.push('/recruiter');
      }
    }
  },[accountStore]);

  const updateStep = (step: number) => {
    setStep(step);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      // setLoading(true);
      // if (initialData) {
      //   await axios.patch(`/api/${params.storeId}/colors/${params.colorId}`, data);
      // } else {
      //   await axios.post(`/api/${params.storeId}/colors`, data);
      // }
      // router.refresh();
      // router.push(`/${params.storeId}/colors`);
      // toast.success(toastMessage);
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      // setLoading(false);
    }
  };


  return (
    <>
      <div className={cn("flex flex-col gap-6 p-4 md:p-12 h-full justify-center", className)} {...props}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

            {step === 1 && <Essentials form={form} />}

            {step === 2 && <Industries form={form} />}

            {step === 3 && <Roles form={form} />}

            {step === 4 && <ImagesLinks form={form} />}

            {step === 5 && <AboutInfo form={form} />}

            <Steps
              step={step}
              setStep={updateStep}
            />
          </form>
        </Form>
      </div>
    </>
  );
});

export default NewTalentForm;
