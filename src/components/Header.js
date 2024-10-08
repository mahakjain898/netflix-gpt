import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex w-screen absolute bg-gradient-to-t from-black py-2 px-8 z-10 justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="LOGO"
        className="w-44"
      />
      <div className="flex">
        <img
          className="w-10 h-10 m-4"
          src="https://occ-0-460-616.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdxEUr0osXRFYfSfpyHlhW3tGPJk2zLqQXZD0s2qkXKKI8YWSF-HQBid6-4xRqSkH603kHyYKMsOhqN3gMy24wvWALOwpZg.png?r=c99"
        />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
