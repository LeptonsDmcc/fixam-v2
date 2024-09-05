import { fixamBaseUrl } from "../contants";

export const postData = async <R, D>(url: string, data: D) => {
  try {
    console.log("RECEIVED DATA", data);
    console.log("JSON.stringify(data)", JSON.stringify(data));
    const postRes = await fetch(`${process.env.FIXAM_BASE_URL}/${url}/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("GOT HERE START postRes", postRes);
    if (!postRes.ok) {
      console.log("CAN'T CREATE ADDRESS", await postRes);
      return undefined;
    }
    console.log("GOT HERE END postRes", postRes);

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

    console.log("GOT HERE START putRes", putRes);
    if (!putRes.ok) {
      console.log("CAN'T CREATE ADDRESS", await putRes.json());
      return undefined;
    }
    console.log("GOT HERE END putRes", putRes);

    const resData: R = await putRes.json();

    return resData;
  } catch (error) {
    console.log("ERROR", error);
    return undefined;
  }
};

export const deleteData = async <R>(url: string) => {
  const postRes = await fetch(`${fixamBaseUrl}/${url}/`, {
    method: "DELETE",
  });
  const resData: R = await postRes.json();
  return resData;
};
