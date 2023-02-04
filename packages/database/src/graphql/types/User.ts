import {
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus";
import { User as _User } from "nexus-prisma";

export const User = objectType({
  name: _User.$name,
  description: _User.$description,
  definition: (t) => {
    t.field(_User.id);
    t.field(_User.name);
  },
});

export const getUsers = queryField("users", {
  type: list("User"),
  resolve: (_, __, ctx) => {
    return ctx.prisma.user.findMany();
  },
});
export const getUser = queryField("user", {
  type: "User",
  args: {
    id: nonNull(stringArg()),
  },
  resolve: (_, args, ctx) => {
    return ctx.prisma.user.findUnique({
      where: { id: args.id },
    });
  },
});
export const createUser = mutationField("createUser", {
  type: "User",
  args: {
    name: nonNull(stringArg()),
  },
  resolve: (_, args, ctx) => {
    return ctx.prisma.user.create({
      data: { name: args.name },
    });
  },
});
export const deleteUser = mutationField("deleteUser", {
  type: "User",
  args: {
    id: nonNull(stringArg()),
  },
  resolve: (_, args, ctx) => {
    return ctx.prisma.user.delete({
      where: {
        id: args.id,
      },
    });
  },
});
