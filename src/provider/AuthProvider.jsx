import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login User

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logut user
  const logOut = () => {
    return signOut(auth);
  }

  //  OnAuth State change

  useEffect(() => {
    const unSubscrib = onAuthStateChanged(auth, currentUser => {
      console.log('auth user :', currentUser)
      setUser(currentUser);
    });
    return () => {
      unSubscrib();
    }
  }, [])
  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;