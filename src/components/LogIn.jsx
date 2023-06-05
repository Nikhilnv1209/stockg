import React, { useState } from "react";
import "../styles/login.css";
const LogIn = () => {
  const [showpass, setShowpass] = useState(false);

  const handletoggle = () => {
    setShowpass((prev) => !prev);
  };

  return (
    <div className="login__screen">
      <form action="" className="login__form">
        <div className="form__headings">
          <h1>Login Please</h1>
          <span>
            We will keep all your details <br /> safe & secure
          </span>
        </div>

        <div
          className="form__fields
          "
        >
          <input
            type="text"
            placeholder="Enter your email please"
            className="email
            "
          />
          <div>
            <input
              type={showpass ? "text" : "password"}
              placeholder="Password"
              className="password"
            />
            <button onClick={handletoggle} type="button">
              <img
                src={showpass ? "/visibility.png" : "visibility_off.png"}
                alt=""
                style={{ opacity: 0.5 }}
              />
            </button>
            <button type="button">Forgot password?</button>
          </div>
        </div>
        <button className="login__button">Log in</button>
        <span
          style={{
            fontSize: "0.875rem" /* 14px */,
            lineHeight: "1.25rem" /* 20px */,
          }}
        >
          OR
        </span>
        <div
          className="other__signins
          "
        >
          <button type="button">
            <img src="/google.png" alt="" />
          </button>
          <button type="button">
            <img src="/Facebook.png" alt="" />
          </button>
          <button type="button">
            <img src="/Twitter.png" alt="" />
          </button>
        </div>

        <span className="lastspans">
          Not have any account then Please <span>Sign up</span>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
