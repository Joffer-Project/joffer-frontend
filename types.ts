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
  