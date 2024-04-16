const URL = `${process.env.NEXT_PUBLIC_API_URL}/Accounts/GetAll`;
// import data from '@/data/accounts.json'
const getAllAccounts = async () => {
    const res = await fetch(`${URL}`);
    return res.json();
};


export { getAllAccounts };