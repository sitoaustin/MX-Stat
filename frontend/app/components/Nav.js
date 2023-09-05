'use client';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav({ user }) {
  return (
    <nav className='flex justify-between min-h-[10vh] px-10 items-center'>
      <ul className='flex'>
        <li className='mr-5'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='underline underline-offset-4'>
          <Link href={'/chart'}>Chart</Link>
        </li>
      </ul>
      <ul className='flex'>
        {!user && (
          <li className='bg-teal-600 text-white py-2 px-4 rounded-md '>
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        {user && (
          <>
            <Link href={'/profile'}>
              <li>
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={36}
                  height={36}
                  className='rounded-full'
                />
              </li>
            </Link>

            <li className='bg-teal-600 text-white py-2 px-4 rounded-md '>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
