import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(savedUser !== null ? savedUser : {});
  const navigate = useNavigate();

  useEffect(() => {
    if (savedUser === null) {
      navigate("/");
    } else {
      navigate("/home");
    }

  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}