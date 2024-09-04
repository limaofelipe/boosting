import { Form, FormTitle, LoginContainer } from "./styles";
import logo from "../../assets/logo.svg"
import bgImage from "../../assets/bg.png"

export function LoginForm(){
  return (
    <LoginContainer>
      <FormTitle>
        <div >
          <img className="logoImage" src={logo}/>
        </div>

        <Form action="">
            <h1>Acesse a Plataforma</h1>
            <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>

          <div className="userInformations">
            <div className="email">
              <label>E-mail</label>
              <input placeholder="Digite seu e-mail" type="email" name="" id="" />
            </div>
            <div className="password">
              <label>Senha</label>
              <a href="#">Esqueceu a senha?</a>
            <input placeholder="Digite sua senha" type="password" name="" id="" />
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