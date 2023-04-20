import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserContext } from "./contexts/userContext.js";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            {/* <Route path="/home" element={<Home />} />
          <Route path="/nova-transacao/:type" element={<NewTransactions />} /> */}
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}