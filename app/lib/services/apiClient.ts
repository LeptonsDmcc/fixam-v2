import { fixamBaseUrl, fixamBaseUrlClient } from "../contants";
import { getCookieValueByName } from "../cookies";
import { getAuthToken } from "../data/user";

export const postData = async <R, D>(
  url: string,
  data: D,
  config?: { withAuth: boolean }
) => {
  let headers: { "Content-Type": string; Authorization?: string } = {
    "Content-Type": "application/json",
  };

  if (config?.withAuth) {
    if (typeof window === "undefined") {
      // We're on the server
      const authToken = getAuthToken();
      headers = {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      };
    } else {
      // We're on the client
      const authToken = getClientAuthToken();
      headers = {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
  }

  try {
    const postRes = await fetch(`${process.env.FIXAM_BASE_URL}/${url}/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });

    if (!postRes.ok) {
      console.log("CAN'T POST", await postRes);
      return undefined;
    }

    const resData: R = await postRes.json();

    return resData;
  } catch (error) {
    console.log("ERROR", error);
    return undefined;
  }
};

export const putData = async <R, D>(url: string, data: D) => {
  try {
    const putRes = await fetch(`${process.env.FIXAM_BASE_URL}/${url}/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!putRes.ok) {
      console.log("CAN'T CREATE POST DATA", await putRes.json());
      return undefined;
    }

    const resData: R = await putRes.json();

    return resData;
  } catch (error) {
    console.log("ERROR", error);
    return undefined;
  }
};

export const patchData = async <R, D>(
  url: string,
  data?: D,
  config?: { withAuth: boolean }
) => {
  // Client or Server
  const baseUrl = fixamBaseUrl || fixamBaseUrlClient;

  try {
    const patchRes = await fetch(`${baseUrl}/${url}/`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: generateHeaderBaseonAuth(config?.withAuth || false),
    });

    if (!patchRes.ok) {
      console.log("CAN'T PATCH DATA", await patchRes.json());
      return undefined;
    }

    const resData: R = await patchRes.json();

    return resData;
  } catch (error) {
    console.log("ERROR", error);
    return undefined;
  }
};

export const deleteData = async <R>(
  url: string,
  config: { withAuth: boolean }
) => {
  const postRes = await fetch(`${fixamBaseUrl}/${url}/`, {
    method: "DELETE",
    headers: generateHeaderBaseonAuth(config?.withAuth || false),
  });
  const resData: R = await postRes.json();
  return resData;
};

const generateHeaderBaseonAuth = (withAuth: boolean) => {
  let headers: { "Content-Type": string; Authorization?: string } = {
    "Content-Type": "application/json",
  };

  if (withAuth) {
    if (typeof window === "undefined") {
      // We're on the server
      const authToken = getAuthToken();
      headers = {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      };
    } else {
      // We're on the client
      const authToken = getClientAuthToken();
      headers = {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
  }

  return headers;
};

export const getClientAuthToken = () => getCookieValueByName("auth_access");
