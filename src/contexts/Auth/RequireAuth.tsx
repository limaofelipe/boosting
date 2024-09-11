import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { LoginForm } from "../../pages/Login"

export function RequireAuth ({children} : {children: JSX.Element}) {
  const auth = useContext(AuthContext)

  if(!auth.user) {
    return <LoginForm/>
  }

  return children
}