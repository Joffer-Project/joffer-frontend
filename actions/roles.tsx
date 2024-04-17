import { Role } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createRole = async (data: any) => {
    console.log(data);
    return;
    const res = await fetch(`${URL}/roles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
};

const getRoles = async () => {
    const response = await fetch(`${URL}/Roles/GetAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (!response.ok) {
        throw new Error("An error occurred while fetching the industry data.");
    }
    const data = await response.json();
    return data as Role[];
};


export { createRole, getRoles };