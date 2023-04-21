import axios from "axios";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ContainerSign, Form } from "../components/Styled.js";

export default function SignUp(){
  const [form, setForm] = useState({name:"",email:"",password:"",passwordconfirm:""})
  const navigate = useNavigate()

  function handleChange(e){
    let obj = {...form};
    obj[e.target.name]=e.target.value;
    setForm(obj);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    if(form.password !== form.passwordconfirm) {
      alert("As senhas precisam ser iguais")
    } else{
    axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, {name:form.name.trim(), email:form.email.trim(), password:form.password.trim()})
      .then(()=>navigate("/"))
      .catch((err) =>{
        alert(err.response.data)
      })
    }
  }
  
  return(
    <ContainerSign>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          data-test="name"
        />
        <input
          placeholder="E-mail"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          data-test="email"
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          data-test="password"
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          name="passwordconfirm"
          value={form.passwordconfirm}
          onChange={handleChange}
          required
          data-test="conf-password"
        />
        <button data-test="sign-up-submit" >Cadastrar</button>
      </Form>
      <Link to={"/"}><p>Já tem uma conta? Entre agora!</p></Link>      
    </ContainerSign>
  )
}

