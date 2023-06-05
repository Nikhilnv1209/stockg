import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar'
import SignIn from "./pages/SignIn";
import LogIn from "./components/LogIn";
import Face from "./components/Face";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}>
          <Route path="/signin" element={<LogIn />} />
          <Route path="/signupface" element={<Face/>} />
        </Route>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
