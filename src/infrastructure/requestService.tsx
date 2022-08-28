interface LoginDataType {
  email: string;
  phone: string;
  password: string;
}

export async function sendLoginData(data: LoginDataType): Promise<any> {
  try {
    const request = await fetch('/api/v1/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getContent(): Promise<any> {
  try {
    const request = await fetch('/api/v1/kitty', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getUser(): Promise<any> {
  try {
    const request = await fetch('/api/v1/profile', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getLogoutServer(): Promise<any> {
  try {
    const request = await fetch('/api/v1/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}
