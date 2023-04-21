import { useParams, useNavigate } from "react-router-dom";
import { ContainerHome, Form, Header } from "../components/Styled.js";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/userContext.js";
import axios from "axios";

export default function NewTransaction(){
  const {type} = useParams();
  const {user} = useContext(UserContext)
  const [form, setForm] = useState({value:"",description:""})
  const navigate = useNavigate();

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem("user"))
    
    if(!savedUser){
      navigate("/")      
    }
  })

  function handleChange(e){
    const obj = {...form};
    obj[e.target.name]=e.target.value;
    setForm(obj)
  }

  function handleSubmit(e){
    e.preventDefault();
    const config = {
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    }
    const obj = {value: Number(form.value.replace(",",".")), description:form.description, type}
    axios.post(`${process.env.REACT_APP_API_URL}/transactions`, obj, config)
      .then(()=>navigate("/home"))
      .catch(err => alert(err.response.data))
  }

  return(
    <ContainerHome>
      <Header><h1>Nova {type === "in"? "entrada": "saída"}</h1></Header>
      <Form onSubmit={handleSubmit}>
        <input name="value" placeholder="Valor" type="number" value={form.value} onChange={handleChange} required />
        <input name="description" placeholder="Descrição" type="text" value={form.description} onChange={handleChange} required />
        <button>Salvar {type === "in"? "entrada": "saída"}</button>
        <button type="button" onClick={()=>navigate(-1)} style={{marginTop:"13px"}}>Cancelar</button>
      </Form>
    </ContainerHome>
  )
};