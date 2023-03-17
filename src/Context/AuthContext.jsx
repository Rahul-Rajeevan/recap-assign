import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const [auth, setauth] = useState({isAuth:false,token:null})
const loginUser=(token)=>{
setauth({"isAuth":true,token:token})
}
const logoutUser=()=>{
    setauth({"isAuth":false,token:null})
}
return <AuthContext.Provider value={{ auth,loginUser,logoutUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
