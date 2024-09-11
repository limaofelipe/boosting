import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../Hooks/useApi";

export function AuthProvider({children}:{children:JSX.Element}) {
  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  useEffect(()=>{
    const validateToken = async () => {
      const storageData = localStorage.getItem("@authtoken")
      if (storageData) {
        const data = await api.validateToken(storageData)
        if(data.user) {
          setUser(data.user)
        }
      }
    }
    validateToken()
  }, [])

  const signIn = async (email: string, password: string) => {
    const data = await api.signIn(email, password)

    if (data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true
    }
    return false
  }

  const signOut = async () => {
    setUser(null);
    setToken('');
    await api.logout();
}

  const setToken = (token:string) => {
    localStorage.setItem("@authtoken", token)
  }
  
  
  return (

    <AuthContext.Provider
    value={{
        user,
        signIn,
        signOut
      }}>
        {children}
    </AuthContext.Provider>

  )
}