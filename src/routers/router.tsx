import { Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"
import { LoginForm } from "../pages/Login"
import { DefaultLayout } from "../Layout/defaultLayout"
import { InitialPage } from "../pages/Private"
import { RequireAuth } from "../contexts/Auth/RequireAuth"
import { RegisterForm } from "../pages/Register"



export function PublicRouters() {
  return  (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/paginainicial" element={<RequireAuth><InitialPage/></RequireAuth>}/>
        <Route path="/registrar" element={< RegisterForm />}/>
      </Route>
    </Routes>
  )
}