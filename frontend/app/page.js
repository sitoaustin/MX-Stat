'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('http://127.0.0.1:5000/members')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <main>
      <h1>Hello there</h1>
    </main>
  );
}
