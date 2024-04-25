"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftCircle,
  Clipboard,
  Globe,
  Instagram,
  Linkedin,
  LogOut,
  Save,
  Twitter,
  UserCircle2,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Talent, Industry, Job, Role } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import useTalent from "@/hooks/talent-store";
import {
  getTalent,
  updateTalent,
} from "@/actions/talent";
import {
  createRole,
  createRoleForJob,
  getRoles,
  getRolesByAccount,
} from "@/actions/roles";
import {
  createIndustry,
  createIndustryForJob,
  getIndustries,
  getIndustriesByAccount,
} from "@/actions/industry";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import ImageUpload from "@/components/ui/image-upload";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";

const TalentSettings = () => {
  const talentStore = useTalent();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [activeTalent, setActiveTalent] = useState<Talent>(
    {} as Talent
  );
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [ownIndustries, setOwnIndustries] = useState<string[]>([]);
  const [ownRoles, setOwnRoles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/token");
        const { accessToken } = await response.json();
        if (accessToken) {
          talentStore.setState({ token: accessToken });
          const fetchedTalentDetails: Talent = await getTalent(
            accessToken
          );
          if (
            Object.keys(fetchedTalentDetails).length > 0 &&
            fetchedTalentDetails.auth0Id
          ) {
            setActiveTalent(fetchedTalentDetails);

            const fetchIndustriesByAccount: Industry[] =
              await getIndustriesByAccount(accessToken);
            setOwnIndustries(
              fetchIndustriesByAccount.map((item) => item.id.toString())
            );

            const fetchRolesByAccount: Role[] = await getRolesByAccount(
              accessToken
            );
            setOwnRoles(fetchRolesByAccount.map((item) => item.id.toString()));

            // fetch industry data
            const fetchedIndData: Industry[] = await getIndustries();
            setIndustries(fetchedIndData);

            // fetch roles data
            const fetchedRolesData: Role[] = await getRoles();
            setRoles(fetchedRolesData);
          } else {
            router.push("/talent/create");
          }
        } else {
          talentStore.setState({ token: "" });
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching token in settings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [currentBox, setCurrentBox] = useState("");
  const [currentLink, setCurrentLink] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [mediumUrl, setMediumUrl] = useState("");
  const [dribbleUrl, setDribbleUrl] = useState("");
  const [personalUrl, setPersonalUrl] = useState("");

  const saveLink = () => {
    if (currentBox === "company") {
      setGithubUrl(currentLink);
    } else if (currentBox === "linkedin") {
      setLinkedInUrl(currentLink);
    } else if (currentBox === "medium") {
      setMediumUrl(currentLink);
    } else if (currentBox === "dribble") {
      setDribbleUrl(currentLink);
    } else if (currentBox === "personal") {
      setPersonalUrl(currentLink);
    }

    setCurrentLink("");
  };

  useEffect(() => {
    setGithubUrl(activeTalent.gitHubUrl);
    setLinkedInUrl(activeTalent.linkedInUrl);
    setMediumUrl(activeTalent.mediumUrl);
    setDribbleUrl(activeTalent.dribbleUrl);
    setPersonalUrl(activeTalent.personalUrl);
  }, [activeTalent]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const token = talentStore.getState().token;
      if (token) {
        const res = await updateTalent(activeTalent, token);
        if (res) {
          const roleRes = await createRole(ownRoles, token, roles);
          const industryRes = await createIndustry(
            ownIndustries,
            token,
            industries
          );
          if (roleRes && industryRes) {
            toast.success("Profile updated successfully.");
            router.push("/talent");
          } else {
            toast.error("Something went wrong.");
          }
        } else {
          toast.error("Failed to update profile.");
        }
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <Dialog>
      <div className="sm:w-3/5 w-full mx-auto p-10 h-full overflow-y-auto">
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
          Update Talent Profile
        </h2>
        <form className="flex flex-col gap-4">
          <Input
            placeholder="Talent Name"
            value={activeTalent.name}
            onChange={(e) =>
              setActiveTalent({ ...activeTalent, name: e.target.value })
            }
            className="py-4 border-2 border-[#3C4144] text-lg h-[65px] rounded-[10px] hover:border-[#5496EE] hover:border-[3px] transition-all-[0.3s]
                                    ease-in-out hover:placeholder-[#5496EE] 
                                    focus:placeholder-opacity-0"
          />

          <Textarea
            placeholder="Talent Description"
            className="rounded-md border border-[#5496EE] resize-y max-h-[200px] md:h-[200px]"
            value={activeTalent.aboutMe}
            defaultValue={activeTalent.aboutMe}
            onChange={(e) => (activeTalent.aboutMe = e.target.value)}
          />

          <p className="text-[#5496EE] w-full">Industries</p>

          <div className="flex py-4 flex-wrap gap-2 justify-center items-center px-2 bg-slate-400 max-h-[400px] overflow-y-auto">
            {industries?.length &&
              industries.map((item) => (
                <div key={item.id} className="flex items-center !mt-0">
                  <Checkbox
                    className="hidden"
                    checked={ownIndustries.includes(item.id.toString())}
                  />
                  <p
                    className={`border-2 rounded-[40px] bg-[#fff] !mt-0 px-[30px] py-[14px] border-[#5496EE] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${
                      ownIndustries.includes(item.id.toString())
                        ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]"
                        : "text-[#5496EE]"
                    }`}
                    onClick={() => {
                      if (ownIndustries.includes(item.id.toString())) {
                        setOwnIndustries(
                          ownIndustries.filter(
                            (value) => value !== item.id.toString()
                          )
                        );
                      } else {
                        setOwnIndustries([
                          ...ownIndustries,
                          item.id.toString(),
                        ]);
                      }
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
          </div>

          <p className="text-[#5496EE] w-full">Roles</p>

          <div className="flex py-4 flex-wrap gap-2 justify-center items-center px-2 bg-slate-400 max-h-[400px] overflow-y-auto">
            {roles?.length &&
              roles.map((item) => (
                <div key={item.id} className="flex items-center !mt-0">
                  <Checkbox
                    className="hidden"
                    checked={ownRoles.includes(item.id.toString())}
                  />
                  <p
                    className={`border-2 rounded-[40px] bg-[#fff] !mt-0 px-[30px] py-[14px] border-[#5496EE] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${
                      ownRoles.includes(item.id.toString())
                        ? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]"
                        : "text-[#5496EE]"
                    }`}
                    onClick={() => {
                      if (ownRoles.includes(item.id.toString())) {
                        setOwnRoles(
                          ownRoles.filter(
                            (value) => value !== item.id.toString()
                          )
                        );
                      } else {
                        setOwnRoles([...ownRoles, item.id.toString()]);
                      }
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
          </div>

          <p className="text-[#5496EE] w-full">Images & Links</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 overflow-auto justify-between">
              <ImageUpload
                value={[activeTalent.avatarUrl]}
                onChange={(url) =>
                  setActiveTalent({ ...activeTalent, avatarUrl: url })
                }
                onRemove={() =>
                  setActiveTalent({ ...activeTalent, avatarUrl: "" })
                }
                label="Logo"
              />
              <ImageUpload
                value={[activeTalent.image2Url]}
                onChange={(url) =>
                  setActiveTalent({ ...activeTalent, image2Url: url })
                }
                onRemove={() =>
                  setActiveTalent({ ...activeTalent, image2Url: "" })
                }
                label="Image 2"
              />
              <ImageUpload
                value={[activeTalent.image3Url]}
                onChange={(url) =>
                  setActiveTalent({ ...activeTalent, image3Url: url })
                }
                onRemove={() =>
                  setActiveTalent({ ...activeTalent, image3Url: "" })
                }
                label="Image 3"
              />
              <ImageUpload
                value={[activeTalent.image4Url]}
                onChange={(url) =>
                  setActiveTalent({ ...activeTalent, image4Url: url })
                }
                onRemove={() =>
                  setActiveTalent({ ...activeTalent, image4Url: "" })
                }
                label="Image 4"
              />
              <ImageUpload
                value={[activeTalent.image5Url]}
                onChange={(url) =>
                  setActiveTalent({ ...activeTalent, image5Url: url })
                }
                onRemove={() =>
                  setActiveTalent({ ...activeTalent, image5Url: "" })
                }
                label="Image 5"
              />
            </div>
            <div className="flex gap-3 overflow-auto justify-between -mb-4">
              <div>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className={cn(
                      "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                      githubUrl ? "border-[#5496EE]" : "border-gray-600"
                    )}
                    onClick={() => setCurrentBox("company")}
                  >
                    <Globe
                      className={cn(
                        "h-8 w-8",
                        githubUrl ? "text-[#5496EE]" : "text-gray-600"
                      )}
                    />
                    <small>Talent</small>
                  </Button>
                </DialogTrigger>
              </div>
              <div>
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
              </div>
              <div>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className={cn(
                      "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                      mediumUrl ? "border-[#5496EE]" : "border-gray-600"
                    )}
                    onClick={() => setCurrentBox("medium")}
                  >
                    <Twitter
                      className={cn(
                        "h-8 w-8",
                        mediumUrl ? "text-[#5496EE]" : "text-gray-600"
                      )}
                    />
                    <small>Twitter</small>
                  </Button>
                </DialogTrigger>
              </div>
              <div>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className={cn(
                      "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                      dribbleUrl ? "border-[#5496EE]" : "border-gray-600"
                    )}
                    onClick={() => setCurrentBox("dribble")}
                  >
                    <Instagram
                      className={cn(
                        "h-8 w-8",
                        dribbleUrl ? "text-[#5496EE]" : "text-gray-600"
                      )}
                    />
                    <small>Instagram</small>
                  </Button>
                </DialogTrigger>
              </div>
              <div>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className={cn(
                      "w-[80px] h-[80px] border-2 flex flex-col items-center justify-center gap-2",
                      personalUrl ? "border-[#5496EE]" : "border-gray-600"
                    )}
                    onClick={() => setCurrentBox("personal")}
                  >
                    <UserCircle2
                      className={cn(
                        "h-8 w-8",
                        personalUrl ? "text-[#5496EE]" : "text-gray-600"
                      )}
                    />
                    <small>YouTube</small>
                  </Button>
                </DialogTrigger>
              </div>
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
            type="button"
            onClick={onSubmit}
            disabled={loading}
            className="bg-[#5496EE] mx-auto my-8 text-center w-1/3 h-[60px] border rounded-[40px] text-lg"
          >
            Save <Save size={20} className="inline-block ml-2" />
          </Button>
        </form>
        <div className="flex w-full gap-4 p-8">
          <Button
            className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg"
            onClick={() => router.back()}
          >
            <ArrowLeftCircle className="w-6 h-6 mr-2" />
            Go back
          </Button>
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
      </div>
    </Dialog>
  );
};

export default TalentSettings;
