import { Talent } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createTalent = async (data: Talent) => {
    const res = await fetch(`${URL}/Talent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.status === 201;
};

const updateTalent = async (data: Talent, token: string) => {
    const res = await fetch(`${URL}/Talent`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    return res.status === 204;
  };

const getJobOffer = async (token: string) => {
    const res = await fetch(`${URL}/JobOffers/Talent`, {
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

const talentLike = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/like/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    return res.status;
};

const talentDislike = async (token: string, jobOfferId: any) => {
    const res = await fetch(`${URL}/dislike/${jobOfferId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return res.status;
}

const getTalent = async (token: string) => {
    const res = await fetch(`${URL}/Talent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    return res.json();
  };

export {
    createTalent, 
    getTalent, 
    getJobOffer,
    getMatches,
    talentLike,
    talentDislike,
    updateTalent
};