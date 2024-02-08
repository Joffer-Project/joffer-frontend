const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

const userLogin = async (email: string, password: string) => {
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
};

const userRegister = async ({
  name,
  email,
  password,
  address,
  phone,
}: {
  name: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
}) => {
  const response = await fetch(`${URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, address, phone }),
  });

  return response.json();
};

const userDelete = async (email: string) => {
  const response = await fetch(`${URL}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return response.json();
};

export { userLogin, userRegister, userDelete };