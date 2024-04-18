import { Match } from "@/types";
import { Job } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getJobOffer = async (token: string) => {
    const res = await fetch(`${URL}/JobOffers/GetAll`, {
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

const like = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/like/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.json();
}

const dislike = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/dislike/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.json();
}

const superlike = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/superlike/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.json();
}


export {
    getJobOffer,
    getMatches,
    like,
    dislike,
    superlike,
};