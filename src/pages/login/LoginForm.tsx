import { Form, FormTitle, LoginContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import logo from "../../assets/logo.svg"
import bgImage from "../../assets/bg.png"
import { zodResolver } from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
  email: z.string()
    .min(1, "Digite um e-mail válido.")
    .email("Digite um e-mail válido."),
  password: z.string()
})


type LoginFormValidSchema = z.infer<typeof LoginFormSchema>

export function LoginForm(){
  
  const { register, handleSubmit } = useForm<LoginFormValidSchema>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = (data:LoginFormValidSchema) => console.log(data);

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
              <input {...register("email")} placeholder="Digite seu e-mail"/>
              
            </div>
            <div className="password">
              <label>Senha</label>
              <a href="#">Esqueceu a senha?</a>
              <input {...register("password")} placeholder="Digite sua senha" type="password"/>
              
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