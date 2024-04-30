import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/5030300f-ed0c-473a-9795-a5123d1dd81d/US-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0941c399-f3c4-4352-8c6d-0a3281e37aa0_large.jpg"
          alt="BACKGROUD"
          className="brightness-50"
        />
      </div>
      <form className="absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg">
        <h1 className="text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="First and Last Name"
            className="p-4 my-2 w-full bg-black rounded-lg border border-gray-600 bg-opacity-75 "
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-black rounded-lg border border-gray-600 bg-opacity-75 "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black rounded-lg border border-gray-600 bg-opacity-75 "
        ></input>
        <button
          className="my-6 bg-red-700 py-4 w-full rounded-lg"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <div>
            <p className="inline-block text-gray-500">New to Netflix? </p>
            <p
              className="px-2 inline-block cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign Up Now.
            </p>
          </div>
        ) : (
          <div>
            <p className="inline-block text-gray-500">Already a User? </p>
            <p
              className="px-2 inline-block cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
