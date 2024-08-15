import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForms = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="absolute inset-0 h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
      <div class=" h-full w-full absolute inset-0 bg-gradient-to-tr from-black to-transparent bg-opacity-50  "></div>
      <form className=" absolute bg-black w-3/12 p-12  my-44 mx-auto left-0 right-0 flex flex-col text-white bg-opacity-85 ">
        <h1 className="font-bold text-3xl mb-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-3 m-2 bg-zinc-900 border rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="px-2 py-3 m-2 bg-zinc-900 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-3 m-2 bg-zinc-900 border rounded-md "
        />
        <button className="bg-[red] p-2 m-2 rounded-md font-semibold">
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
