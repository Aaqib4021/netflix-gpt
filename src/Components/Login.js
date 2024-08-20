import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { Background_img } from "../Utils/Constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignInForms = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    //*Validate the data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return; //*if message is present stop here

    //* Sign in && sign up.
    if (!isSignInForm) {
      //*sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                )
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //*sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="fixed inset-0 h-full w-full">
        <img
          src={Background_img}
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
      <div className=" h-full w-full fixed inset-0 bg-gradient-to-tr from-black to-transparent bg-opacity-50  "></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute bg-black w-3/12 p-12  my-44 mx-auto left-0 right-0 flex flex-col text-white bg-opacity-85 "
      >
        <h1 className="font-bold text-3xl mb-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-2 py-3 m-2 bg-zinc-900 border rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="px-2 py-3 m-2 bg-zinc-900 border rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-2 py-3 m-2 bg-zinc-900 border rounded-md "
        />
        <p className="mx-2 text-[red] font-semibold">{errorMessage}</p>
        <button
          className="bg-[red] p-2 m-2 rounded-md font-semibold"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="m-2 text-gray-300 cursor-pointer hover:underline"
          onClick={toggleSignInForms}
        >
          {isSignInForm
            ? " New to Netflix? Sign Up now"
            : "Already Resgistered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
