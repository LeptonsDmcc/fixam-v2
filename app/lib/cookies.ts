export const setCookie = (name: string, value: string, expiration: number) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (expiration || 0));

  const cookieValue =
    encodeURIComponent(value) +
    (expiration ? `; expires=${expirationDate.toUTCString()}` : "");

  document.cookie = `${name}=${cookieValue}; path=/`;
};

// Utility function to get a specific cookie value by name
export const getCookieValueByName = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
  return null;
};

// export const getCookie = (name: string): string | null => {
//   const cookies = document.cookie.split("; ");

//   for (const cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split("=");

//     if (cookieName === name) {
//       return decodeURIComponent(cookieValue);
//     }
//   }

//   return null;
// };

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00: UTC; path=/;`;
};
