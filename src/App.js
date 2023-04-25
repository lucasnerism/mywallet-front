import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home.jsx";
import NewTransaction from "./pages/NewTransactions.jsx";
import EditTransaction from "./pages/EditTransactions.jsx";
import UserProvider from "./contexts/userContext.js";
import { ContainerApp } from "./components/Styled.js";


export default function App() {

  return (
    <ContainerApp>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-transacao/:type" element={<NewTransaction />} />
            <Route path="/editar-registro/:type/:id" element={<EditTransaction />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ContainerApp>
  );
}