"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/actions/user";
import toast from "react-hot-toast";
import useUser from "@/hooks/user-store";
import Steps from "./Steps";
import Essentials from "./Essentials";
import Industries from "./Industries";
import Roles from "./Roles";
import ImagesLinks from "./ImagesLinks";
import AboutInfo from "./AboutInfo";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(100),
  password: z.string().min(8).max(100),
  description: z.string().min(20).max(200),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  email: "",
  name: "",
  password: "",
  description: "",
};

interface NewTalentFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const NewTalentForm = ({ className, ...props }: NewTalentFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const user = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);

  const updateStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className={cn("grid gap-6 p-20", className)} {...props}>
      <Form {...form}>
        <form>

          {step === 1 && <Essentials form={form} />}

          {step === 2 && <Industries />}

          {step === 3 && <Roles />}

          {step === 4 && <ImagesLinks />}

          {step === 5 && <AboutInfo form={form} />}

          <Steps
            step={step}
            setStep={updateStep}
          />
        </form>
      </Form>
    </div>
  );
};

export default NewTalentForm;
