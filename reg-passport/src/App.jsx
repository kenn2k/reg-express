import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    // <>
    //   {/* <SignIn /> */}
    //   <SignUp />
    // </>
    <Routes>
      <Route path="/" element={"home"} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
