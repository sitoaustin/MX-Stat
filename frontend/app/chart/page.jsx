"use client";
import React, { useEffect, useState } from "react";
import Chart, { LogarithmicScale } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import Image from "next/image";
import CSV_ICON from "../../public/csv_icon.svg";
import { getSession } from "next-auth/react";

export default function Mainpage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  useEffect(() => {
    async function userSession() {
      await getSession().then((data) => {
        setUser(data?.user.name);
        setEmail(data?.user.email);
      });
    }
    userSession();
  }, []);
  const [doneUploaded, setDoneUploaded] = useState(false);
  const [uploadInput, setuploadInput] = useState();
  const [fileName, setfileName] = useState();
  const [mainFileData, setMainFileData] = useState();
  const [labels, setLabels] = useState([]);
  const [fileData, setFileData] = useState([]);

  // Getting UserPosts
  const [saved, setSaved] = useState(false);
  // const [userPost, setUserPosts] = useState();

  function handleUploadFile(e) {
    e.preventDefault();
    // Register User
    fetch("http://34.229.47.30/register", {
      method: "POST",
      body: JSON.stringify({
        username: user,
        email: email,
      }),
    });

    // /////////
    const data = new FormData();
    data.append("file", uploadInput.files[0]);
    data.append("filename", fileName.value);
    data.append("email", email);

    setMainFileData(data);

    fetch("http://34.229.47.30/upload", {
      method: "POST",
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

  // To save the file
  function handleSaveFile(e) {
    e.preventDefault();
    fetch("http://34.229.47.30/postdata", {
      method: "POST",
      body: mainFileData,
    });
    setSaved(true);
  }

  //   Chat data
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [...fileData],
      },
    ],
  };
  return (
    <>
      {!doneUploaded ? (
        <>
          <div className="bg-[#808080] text-[#808080] w-full pt-5 md:pt-20">
            <div className="bg-white md:w-[80%] mx-2 md:mx-auto rounded-2xl p-4 md:p-10 shadow-2xl ">
              <div className="w-full flex items-center justify-center flex-col mb-5">
                <h3>MX-STAT</h3>
                <h1 className="font-semibold text-xl md:text-3xl">
                  Get Sales Insight
                </h1>
              </div>
              <form
                onSubmit={handleUploadFile}
                className="border-dashed border-2 border-teal-600 w-full flex items-center flex-col pt-10 h-[400px] rounded-2xl "
              >
                <Image
                  src={CSV_ICON}
                  alt="csv icon"
                  height={10}
                  width={10}
                  className="w-[100px]"
                  priority
                />
                <div className="mt-5 w-full flex justify-center flex-col items-center">
                  <label htmlFor="file">
                    Select the file you which to upload
                  </label>
                  <input
                    id="file"
                    ref={(ref) => {
                      setuploadInput(ref);
                    }}
                    type="file"
                    className="m-auto"
                  />
                </div>
                <div>
                  <input
                    ref={(ref) => {
                      setfileName(ref);
                    }}
                    type="text"
                    placeholder="Enter the desired name of file"
                    className="hidden"
                  />
                </div>
                <br />
                <div>
                  <button className="bg-teal-600 text-white h-14 w-[100px] md:w-[200px] rounded-full hover:bg-teal-900">
                    Upload
                  </button>
                </div>
              </form>
              <div className="w-full flex justify-center">
                <p className="mt-5 text-[12px]">
                  Your file will be securely handled by Adobe servers and
                  deleted unless you sign in to save it. <br /> By using this
                  service, you agree to the Adobe Terms of Use and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
          <section className="md:pt-32 pt-4 bg-[#808080] pb-16">
            <div className="bg-white mx-2 md:w-[80%] md:mx-auto rounded-2xl p-4 md:p-10 flex flex-col-reverse md:flex-row items-center">
              <div className="md:mr-10">
                <div className="md:pb-10 pb-4 border-b border-gray-400">
                  <h1 className="pb-2 md:pb-0 text-xl md:text-3xl font-semibold md:mb-5">
                    How to get your sales insight
                  </h1>
                  <p>
                    Follow these easy steps in order to get your data insight
                  </p>
                </div>
                <div className="flex items-center py-2 md:py-5 border-b border-gray-400">
                  <div className="text-lg md:text-3xl mr-2 md:mr-5">1</div>
                  <div>Click the select file button above</div>
                </div>
                <div className="flex items-center py-2 md:py-5 border-b border-gray-400">
                  <div className="text-lg md:text-3xl mr-2 md:mr-5">2</div>
                  <div>Select the CSV file you want to upload</div>
                </div>
                <div className="flex items-center py-2 md:py-5 border-b border-gray-400">
                  <div className="text-lg md:text-3xl mr-2 md:mr-5">3</div>
                  <div>After uploading, click on submit</div>
                </div>
                <div className="flex items-center py-2 md:py-5 md:border-b border-gray-400">
                  <div className="text-lg md:text-3xl mr-2 md:mr-5">4</div>
                  <div>MX-STAT will automatically display your sales stat</div>
                </div>
              </div>
              <div>
                <Image
                  src={CSV_ICON}
                  alt="csv icon"
                  height={10}
                  width={10}
                  className="w-[100px] "
                  priority
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>
          <>
            <Bar data={data} />
            {user && email && (
              <div
                className={`flex w-full items-center justify-center ${
                  saved && "hidden"
                }`}
              >
                <form onSubmit={handleSaveFile}>
                  <button className="bg-blue-400 h-16 w-24 ">Save</button>
                </form>
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
}
