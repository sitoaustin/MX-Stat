'use client';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav({ user }) {
  return (
    <nav className='bg-[#008080] flex justify-between min-h-[10vh] px-2 md:px-10 items-center'>
      <ul className='flex'>
        <li className='mr-5'>
          <Link href={'/'}>
            <Image
              src='/mxlogo.png'
              width={10}
              height={10}
              alt=''
              className='rounded-full w-10 h-10 md:w-70 md:h-70'
            />
          </Link>
        </li>
        <li className='text-white underline underline-offset-4 self-center'>
          <Link href={'/chart'}>Chart</Link>
        </li>
      </ul>
      <ul className='flex'>
        {!user && (
          <li className='bg-[#707070] text-white py-2 px-2 md:px-4 rounded-md '>
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        {user && (
          <>
            <li className='bg-[#707070] text-white py-2 px-2 md:px-4 rounded-md '>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
            <Link href={'/profile'}>
              <li className='ml-5'>
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={36}
                  height={36}
                  className='rounded-full'
                />
              </li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
