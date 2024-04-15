export interface Account {
    id: number;
    auth0Id: string;
    name: string;
    password: string;
    accountType: string;
    email: string;
    isPremium: boolean;
    isActive: boolean;
  };

export interface Talent {
  id: number;
  accountId: number;
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
  isActive: boolean;
  name: string;
  auth0Id: string;
  email: string;
  isPremium: boolean;
  industries: string[];
  roles: string[];
  };