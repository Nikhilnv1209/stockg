import { Route, Routes } from "react-router-dom";
import Verification from "./pages/Verification";


function App() {
  return (
    <>
      <Routes>
        <Route path="/KYC/*" element={<Verification />} />
      </Routes>
    </>
  );
}

export default App;
