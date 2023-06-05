import { Outlet } from "react-router-dom";
// import LogIn from "../components/LogIn"
import "../styles/signin.css";

const SignIn = () => {
  const path = window.location.pathname.split("/")[1];
  // console.log(location.split('/')[1]);padding-left: 0.5rem/* 8px
  return (
    <>
      <nav className="navbar">
        <aside>
          <span>
            <img src="/logo.png" alt="" className="navbar__logo" />
          </span>
        </aside>
        <aside className="navbar__links">
          <button>Sign IN</button>
          <button>Request a Demo</button>
        </aside>

        <div className="navbar__backgroundtheme">
          {/* Divs for background blur */}
          <div></div>
          <div></div>

          {/* background images */}
          <img src="/banner1.png" alt="" />
          <img src="/banner2.png" alt="" />
          <img
            src="/banner3.png"
            alt=""
            style={{
              width: path === "signupface" ? "41%" : "38%",
              height: path === "signupface" ? "40%" : "35%",
              bottom: path === "signupface" ? "1%" : "6%",
            }}
          />
          <img src="/banner4.png" alt="" />
        </div>
      </nav>
      {/* <LogIn/> */}
      <Outlet />
    </>
  );
};

export default SignIn;
