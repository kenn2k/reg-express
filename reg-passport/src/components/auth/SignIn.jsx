import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "success") {
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="h-screen bg-gray-400">
      <div className="flex items-center justify-center h-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 p-8 border-2 border-purple-400 rounded-md bg-slate-100"
        >
          <h1 className="text-2xl text-purple-400">Sign In</h1>
          <div className="">
            <label htmlFor="email"></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-md outline-none "
              type="text"
              placeholder="Email"
              id="email"
              value={email}
            />
          </div>
          <div className="">
            <label htmlFor="password"></label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="px-5 py-3 rounded-md outline-none"
              type="password"
              placeholder="Password"
              id="password"
              value={password}
            />
          </div>

          <button className="w-full px-8 py-2 bg-white border-2 border-purple-400 rounded-md">
            Submit
          </button>
          <div className="flex flex-col w-full gap-2">
            <h3 className="text-xs ">You have no account?</h3>
            <Link
              to="/register"
              className="px-4 py-1 text-xs text-center bg-white border-2 border-purple-400 rounded-md"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
