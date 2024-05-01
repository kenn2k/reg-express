import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    password: "",
    email: "",
  });

  const { loading, signup } = useSignUp();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="h-screen bg-gray-400">
      <div className="flex items-center justify-center h-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 p-8 border-2 border-purple-400 rounded-md bg-slate-100"
        >
          <h1 className="text-2xl text-purple-400">Sign In</h1>
          <div className="flex flex-col">
            <input
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              className="px-5 py-3 rounded-md outline-none "
              type="text"
              placeholder="Username"
              id="name"
              value={inputs.fullName}
            />
          </div>
          <div className="flex flex-col">
            <input
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="px-5 py-3 rounded-md outline-none "
              type="email"
              placeholder="Email"
              id="email"
              value={inputs.email}
            />
          </div>
          <div className="flex flex-col">
            <input
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="px-5 py-3 rounded-md outline-none"
              type="password"
              placeholder="Password"
              id="password"
              value={inputs.password}
            />
          </div>

          <button className="w-full px-8 py-2 bg-white border-2 border-purple-400 rounded-md">
            Submit
          </button>
          <div className="flex flex-col w-full gap-2">
            <h3 className="text-xs ">Already have an account?</h3>
            <Link
              to="/login"
              className="px-4 py-1 text-xs text-center bg-white border-2 border-purple-400 rounded-md"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
