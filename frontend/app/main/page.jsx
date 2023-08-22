'use client';
import React, { useState } from 'react';

export default function Mainpage() {
  const [imgST, setImageST] = useState();
  const [uploadInput, setuploadInput] = useState();
  const [fileName, setfileName] = useState();

  function handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', uploadInput.files[0]);
    data.append('filename', fileName.value);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      console.log(response);
      response.json().then((body) => {
        console.log(body);
        setImageST({ imageURL: `http://localhost:5000/${body.file}` });
      });
    });
  }

  return (
    <form onSubmit={handleUploadImage}>
      <div>
        <input
          ref={(ref) => {
            setuploadInput(ref);
          }}
          type='file'
        />
      </div>
      <div>
        <input
          ref={(ref) => {
            setfileName(ref);
          }}
          type='text'
          placeholder='Enter the desired name of file'
        />
      </div>
      <br />
      <div>
        <button>Upload</button>
      </div>
      {imgST && <img src={imgST.imageURL} alt='img' />}
    </form>
  );
}
