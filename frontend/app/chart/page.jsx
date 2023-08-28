'use client';
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Image from 'next/image';
import CSV_ICON from '../../public/csv_icon.svg';

export default function Mainpage() {
  const [doneUploaded, setDoneUploaded] = useState(false);
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
    setDoneUploaded(!doneUploaded);
  }

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
    <>
      {!doneUploaded ? (
        <>
          <div className='bg-blue-400 w-full max-h-[80vh] pt-20'>
            <div className='bg-white w-[80%] mx-auto rounded-2xl p-10 shadow-2xl '>
              <div className='w-full flex items-center justify-center flex-col mb-5'>
                <h3>MX-STAT</h3>
                <h1 className='font-semibold text-3xl'>Get Sales Insight</h1>
              </div>
              <form
                onSubmit={handleUploadImage}
                className='border-dashed border-2 border-blue-600 w-full flex items-center flex-col pt-10 h-[400px] rounded-2xl '
              >
                <Image
                  src={CSV_ICON}
                  alt='csv icon'
                  height={10}
                  width={10}
                  className='w-[100px] '
                  priority
                />
                <div className='mt-5 w-full flex justify-center flex-col items-center'>
                  <label htmlFor='file'>
                    Select the file you which to upload
                  </label>
                  <input
                    id='file'
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
                    className='hidden'
                  />
                </div>
                <br />
                <div>
                  <button className='bg-blue-600 text-white h-14 w-[200px] rounded-full'>
                    Upload
                  </button>
                </div>
              </form>
              <div className='w-full flex justify-center'>
                <p className='mt-5 text-[12px]'>
                  Your file will be securely handled by Adobe servers and
                  deleted unless you sign in to save it. <br /> By using this
                  service, you agree to the Adobe Terms of Use and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
          <section className='pt-52'>
            <div className='bg-white w-[80%] mx-auto rounded-2xl p-10 flex items-center'>
              <div className='mr-10'>
                <div className='pb-10 border-b border-gray-400'>
                  <h1 className='text-3xl font-semibold mb-5'>
                    How to get your sales insight
                  </h1>
                  <p>
                    Follow these easy steps in order to get your data insight
                  </p>
                </div>
                <div className='flex items-center py-5 border-b border-gray-400'>
                  <div className='text-3xl mr-5'>1</div>
                  <div>Click the select file button above</div>
                </div>
                <div className='flex items-center py-5 border-b border-gray-400'>
                  <div className='text-3xl mr-5'>2</div>
                  <div>Select the CSV file you want to upload</div>
                </div>
                <div className='flex items-center py-5 border-b border-gray-400'>
                  <div className='text-3xl mr-5'>3</div>
                  <div>After uploading, click on submit</div>
                </div>
                <div className='flex items-center py-5 border-b border-gray-400'>
                  <div className='text-3xl mr-5'>4</div>
                  <div>MX-STAT will automatically display your sales stat</div>
                </div>
              </div>
              <div>
                <Image
                  src={CSV_ICON}
                  alt='csv icon'
                  height={10}
                  width={10}
                  className='w-[100px] '
                  priority
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>
          <Bar data={data} />
        </div>
      )}
    </>
  );
}
