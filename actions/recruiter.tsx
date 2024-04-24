import { Company, Job } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const createRecruiter = async (data: Company) => {
  const res = await fetch(`${URL}/Company`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.status === 201;
};

const updateRecruiter = async (data: Company, token: string) => {
  const res = await fetch(`${URL}/Company`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.status === 204;
};

const getRecruiter = async (token: string) => {
  const res = await fetch(`${URL}/Company`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

const getTalentMatch = async (token: string) => {
  const res = await fetch(`${URL}/Talents`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

const getMatches = async (token: string) => {
  const res = await fetch(`${URL}/Matches`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

const recruiterLike = async (token: string, jobOfferId: any) => {
  const res = await fetch(`${URL}/like/${jobOfferId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.status;
};

const recruiterDislike = async (token: string, jobOfferId: any) => {
  const res = await fetch(`${URL}/dislike/${jobOfferId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.status;
};

const createJob = async (data: Job, token: string) => {
  const res = await fetch(`${URL}/JobOffers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export {
  createRecruiter,
  getTalentMatch,
  getMatches,
  recruiterLike,
  recruiterDislike,
  createJob,
  updateRecruiter,
  getRecruiter
};
