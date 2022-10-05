import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  console.log(children);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user: currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
