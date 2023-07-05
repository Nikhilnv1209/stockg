import { Link } from "react-router-dom";

const KnowMore = () => {
  return (
    <div className="flex flex-col w-full gap-8 px-6 pt-6 pb-2 md:flex-row sm:gap-20">
      <img
        src="/logo.png"
        alt="Know You "
        className="w-[15rem] sm:w-[20rem]  object-contain"
      />
      <section className="flex flex-col w-full text-sm font-bold gap-7 sm:text-base">
        <h1>
          For Quicker processing of your KYC please make sure to fill your
          details properly:
        </h1>
        <ul class="list-decimal pl-6">
          <li>Make sure to upload the documents properly.</li>
          <li>
            Photos that will not be clearly clicked or uploaded will not be
            verified
          </li>
          <li>
            {" "}
            Same document will not be taken as proof of address choose that from
            the options given
          </li>
          <li>
            Government issued documents should not be older than 6 months.
          </li>
        </ul>

        <hr class="border-t border-[#C7F609] my-4 sm:mr-12"></hr>

        <section className="flex flex-col gap-3">
          <h1>Most Important Details:</h1>
          <ul class="list-disc flex flex-col gap-4 pl-6">
            <li>Government Id</li>
            <li>Email Id</li>
            <li>Contact Number</li>
            <li>Date of Birth</li>
            <li>Proof of Address</li>
          </ul>
        </section>

        <div className="flex flex-row items-center justify-between gap-4">
          <Link to={"/KYC"} className="bg-[#C7F609] px-5 py-2 rounded-full sm:px-12 text-sm sm:text-base font-semibold">
            Let's Start
          </Link>
          <div className="space-y-2 sm:space-y-4">
            <h1>Need Help Contact Us</h1>
            <h1>Stoxgsupport51@gmail.com</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowMore;
