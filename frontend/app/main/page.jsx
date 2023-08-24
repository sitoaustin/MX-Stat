'use client';
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default function Mainpage() {
  const [uploadInput, setuploadInput] = useState();
  const [fileName, setfileName] = useState();
  const [labels, setLabels] = useState([]);
  const [fileData, setFileData] = useState([]);

  function handleUploadImage(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('file', uploadInput.files[0]);
    data.append('filename', fileName.value);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        const labelsContent = [...labels];
        const fileDataContent = [...fileData];
        for (let items of body) {
          labelsContent.push(items[0]);
          fileDataContent.push(items[1]);
        }
        setLabels(labelsContent);
        setFileData(fileDataContent);
      });
    });
  }
  //   useEffect(() => {}, [labels, fileData]);

  //   Displaying the chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [...fileData],
      },
    ],
  };
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
      {labels && (
        <div>
          <Bar data={data} />
        </div>
      )}
    </form>
  );
}
