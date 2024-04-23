import { getRoles } from "@/actions/roles";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import useTalent from "@/hooks/talent-store";
import { Role } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
	roles: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
});

interface RolesProps {
	setStep: (step: number) => void;
}

const Roles: React.FC<RolesProps> = ({ setStep }) => {
	const [data, setData] = useState<Role[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const talentStore = useTalent();

	type FormValues = z.infer<typeof schema>;
	const defaultValues: FormValues = {
		roles: talentStore.getState().selectedRoles,
	};

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const fetchedData: Role[] = await getRoles();
				talentStore.setState({ roles: fetchedData });
				setData(fetchedData);
			} catch (error) {
				setError(error as Error);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, []);

	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	const onSubmit = async (data: FormValues) => {
		try {
			talentStore.setState({ selectedRoles: data.roles });
			// console.log(talentStore.getState().selectedRoles);
		} catch (error: any) {
			toast.error("Something went wrong.");
		} finally {
			setStep(4);
		}
	};

	if (isLoading) {
		return <p className="text-center w-full">Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<>
			<h2
				className="font-normal text-4xl bg-gradient-to-r from-[#FF5E00] to-[#B54300] inline-block text-transparent bg-clip-text
            
            xls:text-[28px]
            xls:mt-[0px]
            xls:ml-[0px]
            xls:mb-[-25px] 
            xxs:text-[28px]
            xxs:mt-[16px]
            xxs:ml-[10px]
            xxs:mb-[-25px] 
            sm:text-[28px]
            sm:mt-[16px]
            sm:ml-[10px]
            sm:mb-[-25px] 
            md:text-[28px]
            md:mt-[10px]
            md:ml-[-10px]
            md:mb-[-25px]  
            ml:text-[28px]
            ml:mt-[10px]
            ml:ml-[-10px]
            ml:mb-[-25px] 
            xl:text-[36px]
            xl:mt-[28px]
            xl:ml-[-10px]
            xl:mb-[-20px]
            2xl:text-4xl
            2xl:mt-[20px]
            2xl:mb-[-20px]
            ">
				Roles
			</h2>
			<p
				className="font-400 text-[#5C6062] leading-5 text-justify
            
            xls:text-[14px]
            xls:w-[22 0px]
            xls:mb-[-10px]
            xls:mt-[5px]
            xls:ml-[0px]
            xxs:text-[12px]
            xxs:w-[300px]
            xxs:mb-[-5px]
            xxs:mt-[5px]
            xxs:ml-[10px]
            sm:text-[14px]
            sm:w-[365px]
            sm:mb-[-5px]
            sm:mt-[5px]
            sm:ml-[10px]
            md:text-[14px]
            md:w-[450px]
            md:mb-[2px]
            md:mt-[5px]
            md:ml-[-10px]
            ml:text-[14px]
            ml:w-[500px]
            ml:mb-[-2px]
            ml:mt-[5px]
            ml:ml-[-10px]
            xl:text-[16px]
            xl:w-[530px]
            xl:mb-[0px]
            xl:mt-[5px]
            2xl:text-[18px]
            2xl:w-[560px]
            2xl:mb-[18px]
            2xl:mt-[5px]">
				Select the roles that align best with your interests, knowledge,
				experience, and wishes.{" "}
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div
						className="overflow-y-auto bg-[#E6E6E6] p-[10px] w-[649px] ml-[-47px] h-[315px] border-t-[2px] border-b-[2px] border-[#3C4144] shadow-inner
            
            xls:h-[250px]
            xls:ml-[-15px]        
            xls:w-[238.5px]   
            xls:mb-[-20px]
            xxs:h-[450px]
            xxs:ml-[-15px]        
            xxs:w-[348.5px]   
            xxs:mb-[-20px]
            sm:h-[450px]
            sm:ml-[-15px]        
            sm:w-[408.5px]   
            sm:mb-[-20px]
            md:h-[470px]
            md:ml-[-47px]        
            md:w-[498.5px]   
            md:mb-[-10px]
            ml:h-[270px]
            ml:ml-[-47px]        
            ml:w-[556.5px]   
            ml:mb-[-2px]
            xl:h-[310px]
            xl:ml-[-47px]        
            xl:w-[606.5px]   
            xl:mb-[-20px]
            2xl:h-[315px]
            2xl:ml-[-47px]        
            2xl:w-[649px]   
            2xl:mb-[10px] ">
						<FormField
							control={form.control}
							name="roles"
							render={() => (
								<FormItem className="flex flex-wrap gap-2 justify-center items-center px-2">
									<FormMessage className="w-full text-center -mt-2 text-lg" />
									{data?.length &&
										data.map((item) => (
											<FormField
												key={item.id}
												control={form.control}
												name="roles"
												render={({ field }) => {
													return (
														<FormItem
															key={item.id}
															className="flex items-center !mt-0">
															<FormControl>
																<Checkbox
																	className="hidden"
																	checked={field.value?.includes(
																		item.id.toString()
																	)}
																	onCheckedChange={(
																		checked
																	) => {
																		if (
																			checked
																		) {
																			field.onChange(
																				[
																					...(field.value ||
																						[]),
																					item.id.toString(),
																				]
																			);
																		} else {
																			field.onChange(
																				field.value?.filter(
																					(
																						value
																					) =>
																						value !==
																						item.id.toString()
																				)
																			);
																		}
																	}}
																/>
															</FormControl>
															<FormLabel
																className={`border-2 rounded-[40px] !mt-0 px-[30px] py-[14px]
                                                        bg-[#fff] border-[#FF7E33] hover:border-[#58D336] hover:text-[#58D336] cursor-pointer font-medium text-[18px] ${
															field.value?.includes(
																item.id.toString()
															)
																? "text-[#ffffff] bg-gradient-to-br from-[#58D336] to-[#3E9626] border-[#ffffff] hover:text-[#ffffff]"
																: "text-[#FF7E33]"
														}`}>
																{item.name}
															</FormLabel>
														</FormItem>
													);
												}}
											/>
										))}
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex justify-between items-center pt-8">
						<Button
							onClick={() => setStep(2)}
							className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
							<ChevronLeft /> Back
						</Button>
						<div className="flex flex-row justify-center items-center mx-auto py-6">
							<p className="text-[22px] font-medium tracking-[5px]">
								<span className="text-[#FF7E33]">3</span>/5
							</p>
						</div>
						<Button
							type="submit"
							className="bg-[#FF7E33] w-fit text-center h-[40px] border rounded-[40px] text-lg">
							Next <ChevronRight />
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
};

export default Roles;
