import React, { useState } from "react";
import VerificationCards from "./VerificationCards";
import nationalID from "../assets/National_id.svg";
import passport from "../assets/Passport.svg";
import driversLicense from "../assets/Driving license.svg";
import Address from "../assets/Address.svg";
import ProfilePhoto from "../assets/photo_logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const KYC = () => {
  const pathname = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  // console.log(showPrev);
  const nextpath = () => {
    // console.log("next");
    const pathMap = {
      undefined: "/KYC/WebInformation",
      WebInformation: "/KYC/DocsInformation",
      DocsInformation: "/KYC/DocsInformation",
    };

    const nextPath = pathMap[pathname];
    if (nextPath) {
      navigate(nextPath);
    }
  };

  const prevpath = () => {
    const pathMap = {
      undefined: undefined,
      WebInformation: "/KYC",
      DocsInformation: "/KYC/WebInformation",
    };

    const prevPath = pathMap[pathname];
    if (prevPath) {
      navigate(prevPath);
    }
  };

  return (
    <section className="relative flex gap-10 pt-4 md:pt-5 lg:px-12">
      {/* welcome image */}
      <aside className="hidden max-w-[15rem] lg:flex flex-col items-center justify-start gap-2">
        <img
          src="/KYC_logo.png"
          alt="kyc_logo"
          className="w-[10rem] object-contain"
        />
        <h1 className="w-[70%] text-2xl text-center font-bold">
          You are almost there
        </h1>
        <p className="w-[90%] text-sm text-center">
          To increase your withdrawl limits get verified
        </p>
      </aside>

      {/* KYC cards */}
      <section className="flex flex-col flex-1 w-full">
        <h1 className="pb-5 font-bold text-center md:text-2xl md:text-left">
          {pathname !== undefined ? "Upload Documents" : "Address Verification"}
        </h1>
        <aside className="relative flex flex-col items-center gap-4 md:gap-y-2 md:gap-x-4 md:grid md:grid-rows-[1fr_1fr_auto] md:grid-cols-[30%_30%_30%]">
          {pathname !== "DocsInformation" ? (
            <>
              <VerificationCards
                image={nationalID}
                title={"National Id"}
                uploads={["Pan Card", "Aadhaar", "Voter Id"]}
              />
              <VerificationCards
                image={passport}
                title={"Passport"}
                uploads={["All type of Passports Accepted"]}
              />
              <VerificationCards
                image={driversLicense}
                title={"Driving License"}
                uploads={["Drive Slowly"]}
              />
              <VerificationCards
                image={Address}
                title={"Address Proof"}
                uploads={["Bank Details", "Utility Bills"]}
              />
            </>
          ) : (
            <>
              <VerificationCards
                image={ProfilePhoto}
                title={"Photo Proof"}
                uploads={["1 passport photo"]}
              />
              <VerificationCards
                image={Address}
                title={"Take a Selfie"}
                uploads={["Upload"]}
              />
            </>
          )}
          <div
            className={`w-[50%] md:w-auto pb-8 md:pb-0
          ${
            pathname === "DocsInformation"
              ? "md:col-start-3 md:row-start-2"
              : "md:col-start-3 md:row-start-3"
          }
          `}
          >
            {pathname !== undefined ? (
              <Button buttontext="Previous" onclick={prevpath} />
            ) : null}
            <Button buttontext="Continue" onclick={nextpath} />
          </div>
        </aside>
      </section>
      <Link
        to={"/KYC/Knowmore"}
        className="absolute bottom-0 md:top-[90%] font-bold hover:underline"
      >
        Want to know more before starting?
      </Link>
    </section>
  );
};

export default KYC;
