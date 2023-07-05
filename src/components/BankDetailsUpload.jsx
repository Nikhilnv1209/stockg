import { useNavigate } from "react-router-dom";

const BankDetailsUpload = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full gap-5 py-24 md:gap-12 ">
        <img src="/Arrow.png" alt="Know You" className="object-contain h-3 mt-2 sm:h-5" 
        onClick={() => navigate(-1)}
        />

      <form className="flex flex-col gap-5 w-full sm:w-[70%]">
        <h1 className="text-lg font-bold mb-7">Bank Details</h1>
        <div>
          <p className="text-lg font-semibold">Card Holder Name</p>
          <input
            type="text"
            name="myname"
            className="border-2 border-[#C7F609] rounded-lg px-5 py-2 w-full "
          />
        </div>
        <div>
          <p className="text-lg font-semibold">Bank Name</p>
          <input
            type="text"
            name="myname"
            className="border-2 border-[#C7F609] rounded-lg px-5 py-2 w-full "
          />
        </div>
        <div>
          <p className="text-lg font-semibold">Bank Account Number</p>
          <input
            type="number"
            name="myname"
            className="border-2 border-[#C7F609] rounded-lg px-5 py-2 w-full"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">IFSC Code</p>
          <span className="flex flex-col gap-8 md:flex-row">
            <input
              type="text"
              name="myname"
              className="border-2 border-[#C7F609] rounded-lg px-5 py-2 w-full md:w-[40%] "
            />
            <input
              type="submit"
              value="Submit"
              className="bg-[#C7F609] text-lg font-semibold px-4 py-4 w-[40%] text-center rounded-full   md:py-2 md:w-[20%]"
            />
          </span>
        </div>
      </form>
    </div>
  );
};

export default BankDetailsUpload;
