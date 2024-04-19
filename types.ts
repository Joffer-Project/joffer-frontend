export interface Account {
  auth0Id: string;
  name: string;
  accountType: string;
  email: string;
};

export interface Talent {
  aboutMe: string;
  salaryMinimum: number;
  employmentStatus: string;
  avatarUrl: string;
  image2Url: string;
  image3Url: string;
  image4Url: string;
  image5Url: string;
  gitHubUrl: string;
  linkedInUrl: string;
  mediumUrl: string;
  dribbleUrl: string;
  personalUrl: string;
  name: string;
  auth0Id: string;
  email: string;
};

export interface Role {
  id: number;
  name: string;
  isActive: boolean;
};

export interface Industry {
  id: number;
  name: string;
  isActive: boolean;
};

export interface Match {
  title: string;
  role: string;
  date: string;
  logoUrl: string;
  email: string;
  type: string;
};

export interface Job {
  id: number;
  title: string;
  description: string;
  minSalary: number;
  maxSalary: number;
  employmentStatus: string;
  companyId: number;
  isActive: boolean;
  company: any | null;
  jobOfferSwipes: [];
  jobOfferIndustries: Industry[] | null;
  jobOfferRoles: Role[] | null;
};

export interface Company {
  name: string;
  about: string;
  logoUrl: string;
  slider1Url: string;
  slider2Url: string;
  slider3Url: string;
  websiteUrl: string;
  linkedInUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
}