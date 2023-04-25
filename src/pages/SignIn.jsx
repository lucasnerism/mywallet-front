import Logo from "../components/Logo";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext.js";
import { ContainerSign, Form } from "../components/Styled.js";
import api from "../services/apiServices.js";


export default function SignIn(){
  const [form, setForm] = useState({email:"",password:""})
  const {setUser} = useContext(UserContext)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const savedUser = localStorage.getItem("user")
    if(savedUser){
      setUser(JSON.parse(savedUser))
      navigate("/home")
    }
  })

  function handleChange(e){
    let obj = {...form};
    obj[e.target.name]=e.target.value;
    setForm(obj);
  }

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);

    api.login(form)
      .then((res)=>{
        const obj = {name:res.data.name, token: res.data.token}
        setUser(obj)
        localStorage.setItem("user", JSON.stringify(obj))
        navigate("/home")
      })
      .catch((err) =>{
        alert(err.response.data);
        setLoading(false);
      })
  }

  return(
    <ContainerSign>
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
        <button data-test="sign-in-submit" disabled={loading}>{loading ? <ThreeDots
            height="13"
            width="51"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          /> : "Entrar"}</button>
      </Form>
      <Link to={"/cadastro"}><p>Primeira vez? Cadastre-se!</p></Link>      
    </ContainerSign>
  )
}

