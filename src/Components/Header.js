import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../Utils/Constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full  bg-gradient-to-b  from-black z-10 flex justify-between">
      <img className="max-w-44 " src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex gap-4 items-center mr-4">
          <img className="max-w-12 h-12" src={USER_LOGO} />
          <button
            className="bg-red-500 p-2 rounded-lg text-white font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
