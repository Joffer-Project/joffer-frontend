import { Account } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/Account`;

const getAccount = async (token: String) => {
    const response = await fetch(URL, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error("An error occurred while fetching the account data.");
    }
    const data = await response.json();
    return data as Account[];
};

export { getAccount };