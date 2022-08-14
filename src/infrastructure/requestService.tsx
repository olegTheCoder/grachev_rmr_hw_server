type LoginDataType = {
  email: string;
  phone: string;
  password: string;
};

export async function sendLoginData(data: LoginDataType): Promise<any> {
  const request = await fetch("/api/v1/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await request.json();
  return response;
}

export async function getContent(): Promise<any> {
  const request = await fetch("/api/v1/kitty", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();
  return response;
}

export async function getUser(): Promise<any> {
  const request = await fetch("/api/v1/profile", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();
  return response;
}
