// import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloServer } from "apollo-server-micro";

//
import { createContext } from "./context";
import { schema } from "./schema";

// export const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "http://localhost:3000/api/graphql",
// });

export const apolloServer = new ApolloServer({
  cache: "bounded",
  context: createContext,
  schema,
});
