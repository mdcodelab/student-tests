import { db } from "../practicals/db";
import { auth } from "@clerk/nextjs/server";

export const createAnswers = async (answer) => {
  const { userId } = auth();
  console.log("Received answers:", answer);
  console.log("User ID:", userId);

  return await db.answer.create({
    data: {
      text: answer, // Ensure this matches the expected format in your Prisma schema
      userId,
    },
  });
};
