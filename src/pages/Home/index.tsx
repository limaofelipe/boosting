import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <NavLink to="/login" title="Timer">
    <button>
      Clique aqui para fazer Login
    </button>
    </NavLink>
  )
}