import { Talent } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createTalent = async (data: Talent) => {
    console.log(data);
    return;
    const res = await fetch(`${URL}/Talent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
};


export { createTalent };