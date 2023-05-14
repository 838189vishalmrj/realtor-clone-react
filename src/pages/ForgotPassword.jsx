import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import OAuth from "../components/OAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth,email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not resend password")
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center py-12 px-6 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="key-img"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-400 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
                Don't have a account?
                <Link
                  to={"/sign-up"}
                  className="ml-2 text-red-600 hover:text-red-700
                hover:font-semibold
                transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={"/sign-in"}
                  className=" text-blue-600 hover:text-blue-700
                hover:font-semibold
                transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-3 text-sm font-medium uppercase rounded shadow-md 
            hover:bg-blue-700 transition 
            duration-150 ease-in-out 
            hover:shadow-lg active:bg-blue-800"
            >
              Send reset password
            </button>
            <div
              className="my-4 flex items-center
            before:border before:flex-1 before:border-gray-300
            after:border after:flex-1 after:border-gray-300 "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
