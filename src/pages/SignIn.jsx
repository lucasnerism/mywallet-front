import styled from "styled-components";
import Logo from "../components/Logo";

export default function SignIn(){
  return(
    <Container>
      <Logo />
      <Form >
        <input placeholder="E-mail" type="text" name="email" />
        <input placeholder="Senha" type="text" name="password" />
        <button>Entrar</button>
      </Form>
      <p>Primeira vez? Cadastre-se!</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
  }
`;

const Form = styled.form`
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input{
    width: 326px;
    height: 58px;
    padding: 17px;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  button{
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
  }
`