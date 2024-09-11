import { Form, FormTitle, LoginContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import logo from "../../assets/logo.svg"
import bgImage from "../../assets/bg.png"
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginFormSchema = z.object({
  email: z.string()
    .min(1, "Digite um e-mail válido.")
    .email("Digite um e-mail válido."),
  password: z.string()
})


type LoginFormValidSchema = z.infer<typeof LoginFormSchema>

export function LoginForm(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<LoginFormValidSchema>({
    resolver: zodResolver(LoginFormSchema),
  });


  const handleLogin = async () => {
    if(email && password) {
      const isLogged = await auth.signIn(email, password)
      if(isLogged) {
        navigate("/paginainicial")
      } else {
        alert("Dados digitádos são inválidos")
      }
    }
  }

  const onSubmit = () => handleLogin();

  
  return (
    
    <LoginContainer>
      <FormTitle>
        <div >
          <img className="logoImage" src={logo}/>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Acesse a Plataforma</h1>
            <p>Faça login ou registre-se para começar a acompanhar seus alunos a partir de hoje.</p>

          <div className="userInformations">
            <div className="email">
              <label>E-mail</label>
              <input 
                {...register("email")}
                placeholder="Digite seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              
            </div>
            <div className="password">
              <label>Senha</label>
              <a href="#">Esqueceu a senha?</a>
              <input
                {...register("password")}
                placeholder="Digite sua senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              
            </div>
          </div>

          <div>
            <button type="submit">Entrar</button>
            <p>Ainda não tem uma conta?<a href="#"> Inscreva-se</a></p>
          </div>
        </Form>
      </FormTitle>

        <img className="bgImage" src={bgImage} alt="Halteres de academia" />
    </LoginContainer>
  )
}