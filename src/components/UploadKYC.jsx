import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Webcame from "./Webcame";

const UploadKYC = () => {
  const navigate = useNavigate();
  const { title, uploads } = useLocation().state;
  const [user, setUser] = useState({
    name: "John Doe",
    address: "New Delhi, India",
    "father's Name": "Robin Doe",
    DOB: "01/01/2000",
    PAN: "abc",
    "Aadhar Number": "123456789012",
    "Passport Number": "123456789012",
    "Bank Details": "123456789012",
    Photo: "",
  });

  // fetch user info from api to display in side panel
  // const fetchUser = async () => {}

  if (uploads[0] === "1 passport photo") {
    return (
      <section className="flex flex-1 gap-2">
        {/* user info sidebar */}
        <aside className="hidden bg-[#C7F609] flex-[.25] lg:px-6 px-2 py-4 md:flex flex-col md:gap-6 lg:gap-10 bg-opacity-[.39] font-semibold">
          <span className="flex gap-2 lg:gap-6">
            <img
              src="/Back_Arrow.svg"
              alt=""
              className="w-4 lg:w-6 hover:cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            />
            <h1 className="lg:text-xl">Document Verified</h1>
          </span>

          {/* user info */}
          <section
            className="flex flex-col gap-8 mt-4 [&>span]:border [&>span]:border-[#000000]/25
          [&>span]:px-6 [&>span]:py-2 [&>span]:rounded-md
          [&>span]:flex [&>span]:justify-between [&>span]:items-center
          "
          >
            <span>
              PAN card
              <img
                src={user.PAN ? "/Uploaded.png" : "/Notuploaded.png"}
                className="object-contain w-8"
              />
            </span>
            <span>
              Address Proof
              <img
                src={
                  user["Bank Details"] ? "/Uploaded.png" : "/Notuploaded.png"
                }
                className="object-contain w-8"
              />
            </span>
            <span>
              Picture
              <img
                src={user["Photo"] ? "/Uploaded.png" : "/Notuploaded.png"}
                className="object-contain w-8"
              />
            </span>
          </section>
        </aside>
        <aside className="flex flex-col flex-1 gap-10 max-md:px-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold md:text-3xl">{title} Upload</h1>
            <p className="text-sm text-center">
              Please upload a clear image of your {title} for verification
            </p>
          </div>
          {/* get video */}
          <Webcame uploads={uploads} />
        </aside>
      </section>
    );
  }

  return (
    <>
      <section className="flex flex-1 gap-2">
        {/* user info sidebar */}
        <aside className="hidden bg-[#C7F609] flex-[.3] lg:px-6 px-2 py-4 md:flex flex-col md:gap-6 lg:gap-10 bg-opacity-[.39] font-semibold">
          <span className="flex gap-2 lg:gap-6">
            <img
              src="/Back_Arrow.svg"
              alt=""
              className="w-4 lg:w-6 hover:cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            />
            <h1 className="lg:text-xl">{title} Upload</h1>
          </span>

          {/* user info */}
          <section className="flex flex-col gap-8 mt-4">
            {Object.keys(user).slice(0,4).map((key, index) => (
              <div key={index} className="flex gap-1 ">
                <h1 className="text-xs capitalize lg:text-base">{key}:</h1>
                <p className="text-xs lg:text-base">{user[key]}</p>
              </div>
            ))}
            <div className="h-[2px] bg-black rounded-md"></div>
          </section>

          <div className="space-y-3 text-xs md:text-lg">
            <p className="font-semibold">Image Resolution</p>
            <ul className="pl-6 space-y-3 text-xs font-normal list-disc lg:text-sm">
              <li>File Size Up to 3mb</li>
              <li>JPG, BMP, & PNG Format</li>
              <li>Contains your name & address</li>
            </ul>
          </div>
        </aside>

        <aside className="flex flex-col flex-1 gap-10 max-md:px-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold md:text-3xl">{title} Upload</h1>
            <p className="text-sm text-center">
              Please upload a clear image of your {title} for verification
            </p>
          </div>
          {/* get video */}
          <Webcame uploads={uploads} />
        </aside>
      </section>
    </>
  );
};

export default UploadKYC;
