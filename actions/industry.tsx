import { Industry } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createIndustry = async (selectedIndustryIds: string[], token: string | undefined, industries: Industry[]): Promise<boolean> => {
    let allCreated: boolean = true;
    console.log("selectedIndustryIds", selectedIndustryIds,  industries);
    for (const industryId of selectedIndustryIds) {

        const industry: Industry | undefined = industries.find(industry => industry.id.toString() === industryId);

        if (industry) {
            const data = {
                id: industry.id,
                name: industry.name,
                isActive: industry.isActive
            };

            try {
                const res = await fetch(`${URL}/Industry/Account/${industry.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    console.log(`Industry ${industry.name} posted successfully`);
                } else {
                    console.error(`Failed to post industry ${industry.name}. Status: ${res.status}`);
                    allCreated = false;
                }
            } catch (error: any) {
                console.error(`Error posting industry ${industry.name}: ${error.message}`);
                allCreated = false;
            }
        } else {
            console.error(`Industry with ID ${industryId} not found`);
            allCreated = false;
        }
    }

    return allCreated;
};


const getIndustries = async () => {
    const response = await fetch(`${URL}/Industries/GetAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (!response.ok) {
        throw new Error("An error occurred while fetching the industry data.");
    }
    const data = await response.json();
    return data as Industry[];
};


const createIndustryForJob = async (selectedIndustryIds: string[], token: string | undefined, industries: Industry[], jobOfferId: string): Promise<boolean> => {
    let allCreated: boolean = true;
    console.log("selectedIndustryIds", selectedIndustryIds,  industries);
    for (const industryId of selectedIndustryIds) {

        const industry: Industry | undefined = industries.find(industry => industry.id.toString() === industryId);

        if (industry) {
            const data = {
                id: industry.id,
                name: industry.name,
                isActive: industry.isActive
            };

            try {
                const res = await fetch(`${URL}/Industry/${industry.id}/JobOffer/${jobOfferId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    console.log(`Industry ${industry.name} posted successfully`);
                } else {
                    console.error(`Failed to post industry ${industry.name}. Status: ${res.status}`);
                    allCreated = false;
                }
            } catch (error: any) {
                console.error(`Error posting industry ${industry.name}: ${error.message}`);
                allCreated = false;
            }
        } else {
            console.error(`Industry with ID ${industryId} not found`);
            allCreated = false;
        }
    }

    return allCreated;
};

export { createIndustry, getIndustries, createIndustryForJob };