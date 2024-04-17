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