import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const [email, handleEmailChange] = useState("");
  const [password, handlePasswordChange] = useState("");
  const [error, setError] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        const res = userCredentials._tokenResponse.idToken;
        navigate(`/contacts/${res}`);
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
        setTimeout(() => {
          setError("");
        }, 4000);
      });
  };
  return (
    <div className="flex flex-row justify-center h-screen items-center bg-gradient-to-br from-blue-300 to-violet-400">
      <div className="w-80 rounded border border-solid border-slate-500 bg-white p-6 sm:w-96">
        <div className=" mb-6 flex justify-center flex-row gap-x-2">
          <label className="text-xl">Login</label>
        </div>

        <h1 className="text-center text-3xl font-bold mb-6">Welcome back!</h1>

        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email">Email Address</label>
          <input
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
            id="email"
            type="text"
            className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
          />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => handlePasswordChange(event.target.value)}
            id="password"
            type="password"
            className="h-8 w-full rounded border border-solid border-gray-300 px-3 py-5 mb-4"
          />

          <button
            className="w-full border-red-500 hover:bg-red-100 h-10 rounded border-2 border-solid"
            type="submit"
          >
            Sign in
          </button>
        </form>
        {error && <p className="error text-red-300 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Signin;
