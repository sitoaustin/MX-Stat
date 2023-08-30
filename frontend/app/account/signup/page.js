// 'use client';
// import GoogleProvider from 'next-auth/providers/google';
// import { PrismaClient } from '@prisma/client';
// import { useEffect, useState } from 'react';

// export default function Signup() {
//   const [user, setUser] = useState();
//   // useEffect(() => {
//   //   TocreateUser()
//   //     .then(async () => {
//   //       await prisma.$disconnect();
//   //     })
//   //     .catch(async (e) => {
//   //       console.error(e);
//   //       await prisma.$disconnect();
//   //       process.exit(1);
//   //     });
//   // }, [user]);
//   const prisma = new PrismaClient();

//   async function TocreateUser() {
//     // ... you will write your Prisma Client queries here
//     const user = await prisma.user.create({
//       data: {
//         name: 'Alice',
//         email: 'alice@prisma.io',
//       },
//     });
//     setUser(user);
//     console.log(user);
//   }

//   // providers: [
//   //   GoogleProvider({
//   //     clientId: process.env.GOOGLE_CLIENT_ID,
//   //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   //   }),
//   // ];

//   return (
//     <main className='flex flex-col'>
//       <h1>Sign Up</h1>
//       <button onClick={TocreateUser}>Create User</button>
//     </main>
//   );
// }
