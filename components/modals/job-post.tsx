"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { ChevronRight, Save } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Industry, Role } from "@/types";
import { Checkbox } from "../ui/checkbox";
import useTalent from "@/hooks/talent-store";
import { createJob } from "@/actions/recruiter";
import { createRole, createRoleForJob } from "@/actions/roles";
import { createIndustry, createIndustryForJob } from "@/actions/industry";
import { useRouter } from "next/navigation";
import useRecruiter from "@/hooks/recruiter-store";

const schema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(1000),
  minSalary: z.number(),
  maxSalary: z.number(),
  employmentStatus: z.string().min(3).max(100),
  industries: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  roles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

interface JobPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  industries: Industry[];
  roles: Role[];
  token: string;
}

export const JobPostModal: React.FC<JobPostModalProps> = ({
  isOpen,
  onClose,
  industries,
  roles,
  token,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const  recruiterStore = useRecruiter();
  const router = useRouter()
  // useEffect(() => {
  //     setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //     return null;
  // }

  type FormValues = z.infer<typeof schema>;

  const defaultValues: FormValues = {
    title: "",
    description: "",
    employmentStatus: "",
    industries: [],
    roles: [],
    minSalary: 100,
    maxSalary: 100,
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      
      const { roles, industries, ...rest } = data;
      recruiterStore.setState({ selectedRoles: roles, selectedIndustries: industries });
      const restData = { ...rest };
      console.log(roles, industries, rest);
      //post job data
      const res = await createJob(restData, token);
      if (res.id) {
        const roleRes = await createRoleForJob(
          recruiterStore.getState().selectedRoles,
          token,
          recruiterStore.getState().roles,
          res.id
        );
        
        const industryRes = await createIndustryForJob(
          recruiterStore.getState().selectedIndustries,
          token,
          recruiterStore.getState().industries,
          res.id
        );
        if (roleRes && industryRes) {
          toast.success("Job posted successfully.");
          onClose();
        } else {
          toast.error("Something went wrong.");
          console.log(
            "Error creating roles and industries",
            roleRes,
            industryRes
          );
        }
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title=""
      description=""
      isOpen={isOpen}
      onClose={onClose}
      className="md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] min-w-[800px] max-h-[90%] px-8 overflow-y-auto"
    >
      <>
        <h2
          className="font-normal w-full text-center text-4xl bg-gradient-to-r from-[#5496EE] to-[#0063E6] inline-block text-transparent bg-clip-text
            
            xls:text-3xl
            xls:mb-8 
            xxs:text-3xl
            xxs:mt-4
            xxs:mb-8
            sm:text-3xl
            sm:mt-6
            md:text-4xl
            md:mb-6
            lg:text-4xl
            lg:mb-2
            xl:text-4xl
            xl:mb-4
            2xl:text-4xl
            2xl:mb-6"
        >
          Post a Job
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5496EE]">Job Title</FormLabel>
                  <FormControl className=" h-12 border rounded-sm border-[#3C4144]">
                    <Input
                      placeholder="Job Title"
                      {...field}
                      className="py-4 border-2 border-[#3C4144] text-lg h-[65px] rounded-[10px] hover:border-[#5496EE] hover:border-[3px] transition-all-[0.3s]
                                    ease-in-out hover:placeholder-[#5496EE] 
                                    focus:placeholder-opacity-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5496EE]">
                    Job Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Job Description"
                      className="rounded-md border border-[#5496EE] resize-y max-h-[200px] md:h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="maxSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5496EE]">Max Salary</FormLabel>
                    <FormControl className=" h-12 border rounded-sm border-[#3C4144]">
                      <Input
                        placeholder="Max Salary"
                        type="number"
                        {...field}
                        className="py-4 border-2 border-[#3C4144] text-lg h-[65px] rounded-[10px] hover:border-[#5496EE] hover:border-[3px] transition-all-[0.3s]
                                    ease-in-out hover:placeholder-[#5496EE] 
                                    focus:placeholder-opacity-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="minSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5496EE]">Min Salary</FormLabel>
                    <FormControl className=" h-12 border rounded-sm border-[#3C4144]">
                      <Input
                        placeholder="Min Salary"
                        type="number"
                        {...field}
                        className="py-4 border-2 border-[#3C4144] text-lg h-[65px] rounded-[10px] hover:border-[#5496EE] hover:border-[3px] transition-all-[0.3s]
                                    ease-in-out hover:placeholder-[#5496EE] 
                                    focus:placeholder-opacity-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#5496EE]">
                    Employment Status
                  </FormLabel>
                  <FormControl className=" h-12 border rounded-sm border-[#3C4144]">
                    <Input
                      placeholder="Employment Status "
                      {...field}
                      className="py-4 border-2 border-[#3C4144] text-lg h-[65px] rounded-[10px] hover:border-[#5496EE] hover:border-[3px] transition-all-[0.3s]
                                    ease-in-out hover:placeholder-[#5496EE] 
                                    focus:placeholder-opacity-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormLabel className="text-[#5496EE] w-full">Industries</FormLabel>
            <FormField
              control={form.control}
              name="industries"
              render={() => (
                <FormItem className="flex py-4 flex-wrap gap-2 justify-center items-center px-2 bg-slate-400 max-h-[400px] overflow-y-auto">
                  <FormMessage className="w-full text-center -mt-2 text-lg" />
                  {industries?.length &&
                    industries.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="industries"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex items-center !mt-0"
                            >
                              <FormControl>
                                <Checkbox
                                  className="hidden"
                                  checked={field.value?.includes(
                                    item.id.toString()
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        item.id.toString(),
                                      ]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== item.id.toString()
                                        )
                                      );
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel
                                className={`border-2 rounded-[40px] bg-[#fff] !mt-0 px-[30px] py-[14px] border-[#5496EE] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${
                                  field.value?.includes(item.id.toString())
                                    ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]"
                                    : "text-[#5496EE]"
                                }`}
                              >
                                {item.name}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                </FormItem>
              )}
            />

            <FormLabel className="text-[#5496EE] w-full">Roles</FormLabel>
            <FormField
              control={form.control}
              name="roles"
              render={() => (
                <FormItem className="flex py-4 flex-wrap gap-2 justify-center items-center px-2 bg-slate-400 max-h-[400px] overflow-y-auto">
                  <FormMessage className="w-full text-center -mt-2 text-lg" />
                  {roles?.length &&
                    roles.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="roles"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex items-center !mt-0"
                            >
                              <FormControl>
                                <Checkbox
                                  className="hidden"
                                  checked={field.value?.includes(
                                    item.id.toString()
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        item.id.toString(),
                                      ]);
                                    } else {
                                      field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== item.id.toString()
                                        )
                                      );
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel
                                className={`border-2 rounded-[40px] bg-[#fff] !mt-0 px-[30px] py-[14px] border-[#5496EE] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${
                                  field.value?.includes(item.id.toString())
                                    ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]"
                                    : "text-[#5496EE]"
                                }`}
                              >
                                {item.name}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={loading}
              className="bg-[#5496EE] mx-auto my-8 text-center w-1/3 h-[60px] border rounded-[40px] text-lg"
            >
              Save <Save size={20} className="inline-block ml-2" />
            </Button>
          </form>
        </Form>
      </>
    </Modal>
  );
};
