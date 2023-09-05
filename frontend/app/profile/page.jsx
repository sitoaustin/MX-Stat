'use client';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [userPosts, setUserPost] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/postdata', {
      method: 'GET',
    }).then((response) => {
      response.json().then((body) => {
        setUserPost(body);
        console.log(body);
      });
    });
  }, []);
  return (
    <>
      <div>
        {userPosts.map((data) => (
          <div>Name</div>
        ))}
      </div>
    </>
  );
}
