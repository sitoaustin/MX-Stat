'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState();
  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/members')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  useEffect(() => {
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'Maka',
        name: 'Moon walk',
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    //   fetch('http://127.0.0.1:5000/members')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //       console.log(data);
    //     });
  }, []);
  return (
    <main className='flex flex-col'>
      <h1>HOME PAGE</h1>
    </main>
  );
}
