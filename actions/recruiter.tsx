import { Company } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createRecruiter = async (data: Company) => {
    const res = await fetch(`${URL}/Company`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.status === 201;
};

const getTalentMatch = async (token: string) => {
    const res = await fetch(`${URL}/JobOffers/Recruiter`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.json();
}

const getMatches = async (token: string) => {
    const res = await fetch(`${URL}/Matches`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.json();
}

const recruiterLike = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/like/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    return res.status;
};

const recruiterDislike = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/dislike/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.status;
}


export {
    createRecruiter, 
    getTalentMatch,
    getMatches,
    recruiterLike,
    recruiterDislike
};