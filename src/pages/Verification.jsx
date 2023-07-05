import VerificationHeader from '../components/VerificationHeader'
import Sidebar from '../components/Sidebar'
import KYC from '../components/KYC'
import { Route, Routes, useLocation } from 'react-router-dom'
import UploadKYC from '../components/UploadKYC'
import KnowMore from '../components/Knowmore'
import BankDetailsUpload from '../components/BankDetailsUpload'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <VerificationHeader />
      <KYC />
    </>
  )
}

const Verification = () => {
  const pathname = useLocation().pathname;
  return (
    <main className={`bg-[#FFFFFF] flex flex-col flex-1 pt-[3.2rem]
    ${(pathname === "/KYC/UploadKYC" || pathname === "/KYC/Knowmore") ? "md:pl-0":"md:pl-[8rem] px-4"}
    `}
    >
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/WebInformation" element={<Layout />} />
        <Route path="/DocsInformation" element={<Layout />} />
        <Route path="/UploadKYC" element={<UploadKYC />} />
        <Route path="/Knowmore" element={<KnowMore />} />
        <Route path="/UploadbankKYC" element={<BankDetailsUpload />} />
      </Routes>
    </main>
  )
}

export default Verification