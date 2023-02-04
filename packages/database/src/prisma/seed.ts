//
import type { User } from "@prisma/client";
//
import { prisma } from ".";

const DEFAULT_USERS = [
  {
    name: "Tim Apple",
  },
] as Array<Partial<User>>;

const main = async () => {
  try {
    // await Promise.all(
    //   DEFAULT_USERS.map((user) =>
    //     prisma.user.upsert({
    //       where: {
    //         email: user.email!,
    //       },
    //       update: {
    //         ...user,
    //       },
    //       create: {
    //         ...user,
    //       },
    //     })
    //   )
    // );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
main();
