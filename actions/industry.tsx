// import { Industry } from "@/types";

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


export { createIndustry };