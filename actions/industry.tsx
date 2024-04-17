import { Industry } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createIndustry = async (data: any) => {
    console.log(data);
    return;
    const res = await fetch(`${URL}/industry`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
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


export { createIndustry, getIndustries };