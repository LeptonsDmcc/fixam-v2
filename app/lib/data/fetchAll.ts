import { fixamBaseUrl } from "../contants";
import { getAuthToken } from "./user";

const fetchAll = async <ResType>(
  from: string,
  options?: { withAuth?: boolean }
) => {
  try {
    let headers = {};
    const authToken = getAuthToken();

    if (options?.withAuth) {
      headers = {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      };
    }

    const url = `${fixamBaseUrl}/${from}/`;
    const res = await fetch(url, {
      cache: "no-store",
      headers: headers,
    });

    if (!res.ok) {
      console.log("NOT OK");
      console.log(res);
      // TODO: Consider returning custom error object
      return undefined;
    }

    const jsonRes = await res.json();
    let results: ResType = jsonRes;

    if (jsonRes.results) results = jsonRes.results;

    return results;
  } catch (error) {
    console.error("SOMETHING FAILED", error);
    return undefined;
  }
};

export default fetchAll;
