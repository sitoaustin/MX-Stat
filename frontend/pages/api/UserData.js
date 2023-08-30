import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUser() {
  const users = await prisma.user.findMany();
  return users;
}
export default async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function createPost() {
  const post = await prisma.post.create({
    data: {
      title: 'How to win a babes heart2',
      content: 'just dey play2',
      author: {
        connectOrCreate: {
          where: {
            email: 'onyedibesixtusna@gmail.com',
          },
          create: {
            email: 'onyedibesixtusna@gmail.com',
            name: 'Onyedibe Sixtus',
          },
        },
      },
    },
  });
  console.log(post);
}
