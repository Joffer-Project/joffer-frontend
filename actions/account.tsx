import { Account } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
// import data from '@/data/accounts.json'
const getAllAccounts = async () => {
    const res = await fetch(`${URL}/Accounts/GetAll`);
    return res.json();
};

const createAccount = async (data: Account) => {
    console.log(data);
    return;
    const res = await fetch(`${URL}/Account/Create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
};


export { getAllAccounts, createAccount };