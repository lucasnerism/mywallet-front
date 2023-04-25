import Logo from "../components/Logo";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ContainerSign, Form } from "../components/Styled.js";
import api from "../services/apiServices.js";

export default function SignUp(){
  const [form, setForm] = useState({name:"",email:"",password:"",passwordconfirm:""})
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const body = {name:form.name.trim(), email:form.email.trim(), password:form.password.trim()}
    api.signUp(body)
      .then(()=>{
        alert("Conta criada com sucesso!")
        navigate("/")})
      .catch((err) =>{
        alert(err.response.data);
        setLoading(false);
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
          type="email"
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
          minLength={3}
          data-test="password"
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          name="passwordconfirm"
          value={form.passwordconfirm}
          onChange={handleChange}
          minLength={3}
          required
          data-test="conf-password"
        />
        <button data-test="sign-up-submit" disabled={loading}>{loading ? <ThreeDots
            height="13"
            width="51"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          /> :"Cadastrar"}</button>
      </Form>
      <Link to={"/"}><p>Já tem uma conta? Entre agora!</p></Link>      
    </ContainerSign>
  )
}

