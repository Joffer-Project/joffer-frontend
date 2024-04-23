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
import {
  Clipboard,
  Globe,
  Instagram,
  Linkedin,
  LogOut,
  Save,
  Twitter,
  UserCircle2,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Company, Industry, Role } from "@/types";
import { Checkbox } from "../ui/checkbox";
import useTalent from "@/hooks/talent-store";
import { createJob, updateRecruiter } from "@/actions/recruiter";
import { createRole, createRoleForJob } from "@/actions/roles";
import { createIndustry, createIndustryForJob } from "@/actions/industry";
import { useRouter } from "next/navigation";
import useRecruiter from "@/hooks/recruiter-store";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import ImageUpload from "../ui/image-upload";
import { Label } from "../ui/label";

const schema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().min(20).max(1000),
  industries: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  roles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  logoUrl: z.string().url(),
  image2Url: z.string().url().optional(),
  image3Url: z.string().url().optional(),
  image4Url: z.string().url().optional(),
  image5Url: z.string().url().optional(),
  companyUrl: z.string().url().optional(),
  linkedInUrl: z.string().url().optional(),
  twitterUrl: z.string().url().optional(),
  youtubeUrl: z.string().url().optional(),
  instaGramUrl: z.string().url().optional(),
});

interface RecruiterSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  industries: Industry[];
  roles: Role[];
  token: string;
  activeRecruiter: Company;
  ownIndustries: Industry[];
}

export const RecruiterSettingsModal: React.FC<RecruiterSettingsModalProps> = ({
  isOpen,
  onClose,
  industries,
  roles,
  token,
  activeRecruiter,
  ownIndustries
}) => {
  const [ownIndustriesState, setOwnIndustriesState] = useState<Industry[]>([]);
  console.log("activeRecruiter", ownIndustries);
  const [loading, setLoading] = useState<boolean>(false);
  const recruiterStore = useRecruiter();
  const router = useRouter();

  useEffect(() => {
    setOwnIndustriesState(ownIndustries);
    }, [ownIndustries]);


  type FormValues = z.infer<typeof schema>;

  const defaultValues: FormValues = {
    name: activeRecruiter.name || "",
    description: activeRecruiter.description || "",
    industries: ownIndustries.map((item) => item.id.toString()) || [],
    roles: recruiterStore.getState().selectedRoles || [],
    logoUrl: activeRecruiter.logoUrl || "",
    image2Url: activeRecruiter.image2Url || "",
    image3Url: activeRecruiter.image3Url || "",
    image4Url: activeRecruiter.image4Url || "",
    image5Url: activeRecruiter.image5Url || "",
    companyUrl: activeRecruiter.comapnyUrl || "",
    linkedInUrl: activeRecruiter.linkedInUrl || "",
    twitterUrl: activeRecruiter.twitterUrl || "",
    youtubeUrl: activeRecruiter.youtubeUrl || "",
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const [currentBox, setCurrentBox] = useState("");
  const [currentLink, setCurrentLink] = useState("");
  const [comapnyUrl, setComapnyUrl] = useState(
    recruiterStore.formData.comapnyUrl || ""
  );
  const [linkedInUrl, setLinkedInUrl] = useState(
    recruiterStore.formData.linkedInUrl || ""
  );
  const [twitterUrl, setTwitterUrl] = useState(
    recruiterStore.formData.twitterUrl || ""
  );
  const [instaGramUrl, setInstaGramUrl] = useState(
    recruiterStore.formData.instaGramUrl || ""
  );
  const [youtubeUrl, setYoutubeUrl] = useState(
    recruiterStore.formData.youtubeUrl || ""
  );

  const saveLink = () => {
    if (currentBox === "company") {
      setComapnyUrl(currentLink);
    } else if (currentBox === "linkedin") {
      setLinkedInUrl(currentLink);
    } else if (currentBox === "twitter") {
      setTwitterUrl(currentLink);
    } else if (currentBox === "instaGram") {
      setInstaGramUrl(currentLink);
    } else if (currentBox === "youtube") {
      setYoutubeUrl(currentLink);
    }

    setCurrentLink("");
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      if (recruiterStore.getState().token) {
        // update active recruiter state by comparing the new data with the old data
        const updatedRecruiter = {
          ...activeRecruiter,
          ...data,
          comapnyUrl,
          linkedInUrl,
          twitterUrl,
          instaGramUrl,
          youtubeUrl,
        };

        console.log(updatedRecruiter);
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
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
            Update Recruiter Profile
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#5496EE]">
                      Company Name
                    </FormLabel>
                    <FormControl className=" h-12 border rounded-sm border-[#3C4144]">
                      <Input
                        placeholder="Company Name"
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
              <FormLabel className="text-[#5496EE] w-full">
                Company Description
              </FormLabel>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Company Description"
                        className="rounded-md border border-[#5496EE] resize-y max-h-[200px] md:h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel className="text-[#5496EE] w-full">
                Industries
              </FormLabel>
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
              <FormLabel className="text-[#5496EE] w-full">
                Images & Links
              </FormLabel>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 overflow-auto justify-between">
                  <FormField
                    control={form.control}
                    name="logoUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ImageUpload
                            value={field.value ? [field.value] : []}
                            onChange={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                            label="Logo"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image2Url"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ImageUpload
                            value={field.value ? [field.value] : []}
                            onChange={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image3Url"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ImageUpload
                            value={field.value ? [field.value] : []}
                            onChange={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image4Url"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ImageUpload
                            value={field.value ? [field.value] : []}
                            onChange={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image5Url"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ImageUpload
                            value={field.value ? [field.value] : []}
                            onChange={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3 overflow-auto justify-between -mb-4">
                  <FormItem>
                    <FormControl>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className={cn(
                            "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                            comapnyUrl ? "border-[#5496EE]" : "border-gray-600"
                          )}
                          onClick={() => setCurrentBox("company")}
                        >
                          <Globe
                            className={cn(
                              "h-8 w-8",
                              comapnyUrl ? "text-[#5496EE]" : "text-gray-600"
                            )}
                          />
                          <small>Company</small>
                        </Button>
                      </DialogTrigger>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className={cn(
                            "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                            linkedInUrl ? "border-[#5496EE]" : "border-gray-600"
                          )}
                          onClick={() => setCurrentBox("linkedin")}
                        >
                          <Linkedin
                            className={cn(
                              "h-8 w-8",
                              linkedInUrl ? "text-[#5496EE]" : "text-gray-600"
                            )}
                          />
                          <small>LinkedIn</small>
                        </Button>
                      </DialogTrigger>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className={cn(
                            "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                            twitterUrl ? "border-[#5496EE]" : "border-gray-600"
                          )}
                          onClick={() => setCurrentBox("medium")}
                        >
                          <Twitter
                            className={cn(
                              "h-8 w-8",
                              twitterUrl ? "text-[#5496EE]" : "text-gray-600"
                            )}
                          />
                          <small>Twitter</small>
                        </Button>
                      </DialogTrigger>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className={cn(
                            "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                            instaGramUrl
                              ? "border-[#5496EE]"
                              : "border-gray-600"
                          )}
                          onClick={() => setCurrentBox("dribble")}
                        >
                          <Instagram
                            className={cn(
                              "h-8 w-8",
                              instaGramUrl ? "text-[#5496EE]" : "text-gray-600"
                            )}
                          />
                          <small>Instagram</small>
                        </Button>
                      </DialogTrigger>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className={cn(
                            "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                            youtubeUrl ? "border-[#5496EE]" : "border-gray-600"
                          )}
                          onClick={() => setCurrentBox("personal")}
                        >
                          <UserCircle2
                            className={cn(
                              "h-8 w-8",
                              youtubeUrl ? "text-[#5496EE]" : "text-gray-600"
                            )}
                          />
                          <small>YouTube</small>
                        </Button>
                      </DialogTrigger>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              </div>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share your link below</DialogTitle>
                  <DialogDescription>
                    Links will be shown in your profile in the order as listed.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      type="text"
                      value={currentLink}
                      onChange={(e) => setCurrentLink(e.target.value)}
                      placeholder="Paste link here"
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Paste</span>
                    <Clipboard
                      className="h-4 w-4"
                      onClick={() =>
                        navigator.clipboard
                          .readText()
                          .then((clipText) => setCurrentLink(clipText))
                      }
                    />
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="default" onClick={saveLink}>
                      Save
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>

              <Button
                type="submit"
                disabled={loading}
                className="bg-[#5496EE] mx-auto my-8 text-center w-1/3 h-[60px] border rounded-[40px] text-lg"
              >
                Save <Save size={20} className="inline-block ml-2" />
              </Button>
            </form>
          </Form>
          <div className="flex flex-col gap-16 p-8">
            <a
              href="/api/auth/logout"
              className="text-[#3C4144] m-auto text-lg font-semibold"
            >
              <Button className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
                <LogOut className="w-6 h-6 mr-2" />
                Logout
              </Button>
            </a>
          </div>
        </>
      </Modal>
    </Dialog>
  );
};
