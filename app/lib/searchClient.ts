import { Client } from "typesense";

let searchClient = new Client({
  nodes: [
    {
      host: "165.227.149.41", // For Typesense Cloud use xxx.a1.typesense.net
      port: 8108, // For Typesense Cloud use 443
      protocol: "http", // For Typesense Cloud use https
    },
  ],

  apiKey: "y8gELvlVObCqTrb4jhKK8KLYpcWXoXD6",
  connectionTimeoutSeconds: 3,
});

export default searchClient;
