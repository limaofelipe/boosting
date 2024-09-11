import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

export function InitialPage() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signOut()
    navigate('/')
  }

  return (
    <>
    
    <h1>
      Olá {auth.user?.name}, bem vindo!
    </h1>

    <button onClick={handleLogout}>
      Sair
    </button>
    </>
  )
}