//
import { makeSchema } from "nexus";
import { join } from "path";

//
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      "../../packages/database/node_modules/@types/nexus-typegen/index.d.ts"
    ),
    schema: join(
      process.cwd(),
      "../../packages/database/src/graphql/schema.graphql"
    ),
  },
  contextType: {
    export: "Context",
    module: join(
      process.cwd(),
      "../../packages/database/src/graphql/context.ts"
    ),
  },
});
