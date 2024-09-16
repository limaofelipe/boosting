import styled from "styled-components";

export const LoginContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  


  .bgImage {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 1120px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
    .bgImage {
      display: none;
      visibility: hidden;
    }


  }


`

export const FormTitle = styled.main `
  margin-left: 7rem;
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-top: 4.5rem;
    

  .logoImage {
    width: 10rem;
    height: 3.3rem;
  }

  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-family: "Titillium Web", sans-serif;
    font-size: 2.25rem;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 1rem;
    margin-top: 2rem;
  }


  @media (max-width: 1120px) {
    margin-left: 0;

    
  }
`

export const Form = styled.form `
  margin-top: 4.5rem;

  label{
    font-weight: 600;
  }

  input {
    border: 1px solid ${(props) => props.theme['gray-200']};
    border-radius: 4px;
    background-color: ${(props) => props.theme["white"]};
    margin-top: 0.5rem;
    padding: 12px;
    width: 100%;
  }
  input:focus{
    border: 1px solid ${(props) => props.theme['purple-900']};
  }

  div > a {
    font-weight: 600;
    text-decoration: none;
    color: ${(props) => props.theme["purple-900"]};
    
  }

  p > a {
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme["purple-900"]};
  }
  
  .userInformations {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
  }

  .password {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  button{
    background-color: ${(props) => props.theme['purple-900']};
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;
    padding-block: 1rem;
    cursor: pointer;
    margin-top: 2rem;
    transition: 0.2s;
  }

  button:hover{
    background-color: ${(props) => props.theme['purple-800']};
  }
`


