import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = ()=>useContext(AuthContext);

export default function AuthProvider({children}){

    const[isAutheticated,setAuthentication] = useState(false)

    return(
        <AuthContext.Provider value={{isAutheticated,setAuthentication}}>
            {children}
        </AuthContext.Provider>
    );
}