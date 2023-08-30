'use client';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// export async function getUser() {
const users = await prisma.user.findMany();
//   console.log(users);
// }

export async function createPost() {
  const post = await prisma.post.create({
    data: {
      title: 'How to win a babes heart',
      content: 'just dey play',
      author: `${user.id}`,
    },
  });
  console.log(post);
}
