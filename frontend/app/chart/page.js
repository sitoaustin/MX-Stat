'use client';

import React from 'react';
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default function BarChart() {
  // const url = 'http://127.0.0.1:5000/query_example?language=Ruby';
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: 'My First dataset',
  //       backgroundColor: 'rgb(255, 99, 132)',
  //       borderColor: 'rgb(255, 99, 132)',
  //       data: [0, 10, 5, 2, 20, 30, 45],
  //     },
  //   ],
  // };
  function handleUploadImage(ev) {
    console.log(ev);
    ev.preventDefault();

    // const data = new FormData();
    // data.append('file', uploadInput.files[0]);
    // data.append('filename', fileName.value);

    // fetch('http://localhost:8000/upload', {
    //   method: 'POST',
    //   body: data,
    // }).then((response) => {
    //   response.json().then((body) => {
    //     this.setState({ imageURL: `http://localhost:8000/${body.file}` });
    //   });
    // });
  }
  return (
    <div>
      <div>
        <form onSubmit={handleUploadImage}>
          <div>
            {/* <input ref={(ref) => { this.uploadInput = ref; }} type="file" /> */}
            <input type='file' name='' id='' />
          </div>
          <div>
            {/* <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" /> */}
          </div>
          <br />
          <div>
            <button>Upload</button>
          </div>
          {/* <img src={this.state.imageURL} alt="img" /> */}
        </form>
        {/* <form action={url} method='POST'> */}
        {/* <input type='file' /> */}
        {/* <input type='text' />
          <button>Submit</button>
        </form> */}
      </div>
      {/* <Bar data={data} />
      <Line data={data} />
      <Pie data={data} /> */}
    </div>
  );
}
