'use client';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import Image from 'next/image';

export default function Profile() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [userImage, setUserImage] = useState('');
  // User data gotten from the backend
  const [userPosts, setUserPost] = useState([]);
  useEffect(() => {
    async function userSession() {
      await getSession().then((data) => {
        setUsername(data?.user.name);
        setEmail(data?.user.email);
        setUserImage(data?.user.image);
      });
    }
    userSession();
  }, []);

  useEffect(() => {
    async function getUserPost() {
      const data = new FormData();
      data.append('email', email);
      fetch('http://34.229.47.30/getdata', {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((body) => {
          setUserPost(body);
        });
      });
    }
    if (email) {
      getUserPost();
    }
  }, [email]);

  // Delete data
  const handleDeleteData = (post_id) => {
    const data = new FormData();
    data.append('id', post_id);
    fetch('http://34.229.47.30/deletedata', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {});
    });
  };
  return (
    <>
      <div className='mt-10'>
        <div className='flex justify-center rounded-full overflow-hidden '>
          {Image && (
            <Image
              src={userImage}
              width={50}
              height={50}
              alt={userImage}
              className='h-32 w-32 rounded-full'
            />
          )}
        </div>
        <div className='flex flex-col w-full items-center my-3'>
          <h1 className='font-semibold text-2xl'>Welcome, {username}</h1>
          <p>Manage your data, delete and view your saved datas.</p>
        </div>
        {userPosts.map((data) => (
          <div key={data.id} className='w-full px-10'>
            <div className='flex w-full justify-center'>
              <div className='flex bg-gray-500 mb-5 h-14 text-white items-center max-w-[500px] px-5 rounded-xl'>
                <h1 className='mr-5'>{data.file_name}</h1>
                <h1>{data.date_posted}</h1>
              </div>
              <div className='flex mb-5 h-14 text-white items-center max-w-[500px] px-5 rounded-xl'>
                <button className='flex justify-center items-center rounded-xl bg-teal-600 w-[100px] h-full mr-5'>
                  <li className='list-none '>View</li>
                </button>
                <button
                  onClick={() => handleDeleteData(data.id)}
                  className='flex justify-center items-center rounded-xl bg-red-600 w-[100px] h-full'
                >
                  <li className='list-none'>Delete</li>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
