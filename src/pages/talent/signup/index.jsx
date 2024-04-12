import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Essentials from "./components/Essentials";
import Industries from "./components/Industries";
import Roles from "./components/Roles";
import ImagesLinks from "./components/ImagesLinks";
import AboutInfo from "./components/AboutInfo";
import Steps from "./components/Steps";
import "./styles/Index.css";
import TalentCreateLayout from "./layout";

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
});

const defaultValues = {
  email: "",
  name: "",
  password: "",
  description: "",
  profileImage: "",
  image2Url: "",
  image3Url: "",
  image4Url: "",
  image5Url: "",
};

const NewTalentForm = () => {
  const form = useForm({
    resolver: async (values) => {
      try {
        await schema.validate(values);
        return { values, errors: {} };
      } catch (errors) {
        return { values: {}, errors: errors.errors };
      }
    },
    defaultValues,
  });
  const [step, setStep] = useState(1);

  const updateStep = (step) => {
    setStep(step);
  };

  return (
    <TalentCreateLayout>
      <div className="new-talent-form">
        <form className="form-container" onSubmit={form.handleSubmit}>
          {step === 1 && <Essentials form={form} />}
          {step === 2 && <Industries />}
          {step === 3 && <Roles />}
          {step === 4 && <ImagesLinks form={form} />}
          {step === 5 && <AboutInfo form={form} />}
          <Steps step={step} setStep={updateStep} />
        </form>
      </div>
    </TalentCreateLayout>
  );
};

export default NewTalentForm;