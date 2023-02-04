//
import type { NextApiRequest, NextApiResponse } from "next";

//
import { apolloServer } from "database";

export const config = {
  api: {
    bodyParser: false,
  },
};
const startServer = apolloServer.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;

  const handler = apolloServer.createHandler({
    path: "/api/graphql",
  });
  await handler(req, res);
};
export default handler;
