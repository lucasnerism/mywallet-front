import axios from "axios";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext.js";
import { Container, Form } from "../style/signPagesStyle.js";


export default function SignIn(){
  const [form, setForm] = useState({email:"",password:""})
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();

  function handleChange(e){
    let obj = {...form};
    obj[e.target.name]=e.target.value;
    setForm(obj);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, form)
      .then((res)=>{
        const obj = {name:res.data.name, token: res.data.token}
        setUser(obj)
        localStorage.setItem("user", JSON.stringify(obj))
        navigate("/home")
      })
      .catch((err) =>{
        alert(err.response.data.details)
      })
  }

  return(
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit} >
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
        <button data-test="sign-in-submit" >Entrar</button>
      </Form>
      <Link to={"/cadastro"}><p>Primeira vez? Cadastre-se!</p></Link>      
    </Container>
  )
}

