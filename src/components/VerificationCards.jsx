import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const VerificationCards = ({ title, uploads, image }) => {
  const pathname = useLocation().pathname.split('/')[2];
  // console.log(pathname);
  const navigate = useNavigate();
  const handleUploadnavigate = (title,uploads) => {
    navigate('/KYC/UploadKYC',
      { state: { title: title, uploads: uploads[0] === "Bank Details" ? uploads.slice(1) : uploads } }
    );
  }

  return (
    <div className={`font-Mulish h-auto md:h-[14rem] lg:h-[18rem] w-full flex justify-center items-start
    ${title === "Address Proof" ? "col-start-2" : ""}
    `}>
      <div className='flex flex-col items-center h-full w-[13rem] gap-3 lg:gap-6 py-4 lg:pt-4 lg:pb-0 border border-[#CCCCCC] rounded-md'>
        <span>
          <img src={image} alt="Verification_card_images"
            className='w-[2.5rem] lg:w-[3.5rem] object-contain' />
        </span>
        <span className='font-semibold lg:text-2xl'>
          {title}
        </span>

        <ul key={title}
          className={`${title === "Passport" || title === "Driving License" ? "list-none w-[10rem] text-center" : "list-disc"}
          ${(pathname === "WebInformation" || pathname === "DocsInformation") && "list-none w-auto"} flex flex-col gap-1
          `}
        >
          {
            uploads.map((upload, index) => {
              return (
                pathname === "WebInformation" || pathname === "DocsInformation" ?
                  <li key={index}
                  onClick={upload === "Bank Details" ? () => navigate("/KYC/UploadbankKYC"): () => handleUploadnavigate(title,uploads)}
                  >
                    <Link to={"#"} className={`flex items-center justify-between gap-2 py-1 border-2 border-[#C7F609] 
                    hover:bg-[#C7F609] rounded-lg ${title === "Photo Proof" ? "px-1" : "px-6"}
                    `}
                    >
                      <img src="/camera.svg" alt="" className='w-6' />
                      <span className='flex-1 text-left'>
                        {
                          title === "Passport" || title === "Driving License" || title === "Take a Selfie" ? "Upload" : upload
                        }
                      </span>
                    </Link>
                  </li>
                  :
                  (<li key={index}>
                    <span>{upload}</span>
                  </li>)
              )
            }
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default VerificationCards