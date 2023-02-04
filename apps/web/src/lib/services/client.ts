//
import { initClient, InitClientReturn } from "@ts-rest/core";

//
import { contracts } from "ts-rest";

export const client: InitClientReturn<typeof contracts> = initClient(
  contracts,
  {
    baseUrl: "http://localhost:3002",
    baseHeaders: {},
    api: async ({ path, method, headers, body }) => {
      const response = await fetch(path, {
        method,
        body,
        headers,
      });

      if (!response.ok) {
        const error = await response.text();

        return {
          status: response.status,
          body: error,
        };
      }

      return {
        status: response.status,
        body: await response.json(),
      };
    },
  }
);
