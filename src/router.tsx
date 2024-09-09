import { Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { LoginForm } from "./pages/Login/LoginForm"
import { DefaultLayout } from "./Layout/defaultLayout"



export function Router() {
  return  (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Route>
    </Routes>
  )
}