import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => console.log(error));
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
              onChange={(e) => setName(e.target.value)}
              className="px-5 py-3 rounded-md outline-none "
              type="text"
              placeholder="Username"
              id="name"
              value={name}
            />
          </div>
          <div className="flex flex-col">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-md outline-none "
              type="email"
              placeholder="Email"
              id="email"
              value={email}
            />
          </div>
          <div className="flex flex-col">
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
