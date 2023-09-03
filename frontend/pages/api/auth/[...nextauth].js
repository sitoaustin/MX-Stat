import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // events: {
  //   createUser: async ({ user }) => {
  //     if (user.email && user.name) {
  //       fetch('http://localhost:5000/register', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email: 'Maka2',
  //           name: 'New user',
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => console.log(data));
  //     }
  //   },
  // },
};

export default NextAuth(authOptions);

// events: {
//   createUser: async ({ user }: any) => {
//     if (user.email && user.name) {
//       const newCustomer = await fetch('https://api.paystack.co/customer', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: user.email,
//           name: user.name,
//         }),
//       });
//       const data = await newCustomer.json();
//       await prisma.user.update({
//         where: { id: user.id },
//         data: { paystackcustomerId: data.data.id },
//       });
//     }
//   },
// },
