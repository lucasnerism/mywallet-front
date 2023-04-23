import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { ContainerHome, Form, Header } from "../components/Styled.js";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/userContext.js";
import axios from "axios";

export default function EditTransaction(){
  const {type, id} = useParams();
  const {user, setUser} = useContext(UserContext)
  const [form, setForm] = useState({value:"",description:""})  
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem("user"))
    const obj = {value: searchParams.get("value"), description: searchParams.get("description")}    
    setForm(obj)
    if(!savedUser){
      navigate("/")      
    } else{
      setUser(savedUser);
    }    
  },[])

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

    const roundValue = Math.round( form.value * 1e2 ) / 1e2

    const obj = {value:roundValue , description:form.description.trim(), type}
    axios.put(`${process.env.REACT_APP_API_URL}/transactions/${id}`, obj, config)
      .then(()=>navigate("/home"))
      .catch(err => alert(err.response.data))
  }

  return(
    <ContainerHome>
      <Header><h1>Editar {type === "in"? "entrada": "saída"}</h1></Header>
      <Form onSubmit={handleSubmit}>
        <input name="value" placeholder="Valor" type="number" value={form.value} onChange={handleChange} required />
        <input name="description" placeholder="Descrição" type="text" value={form.description} onChange={handleChange} required />
        <button>Atualizar {type === "in"? "entrada": "saída"}</button>
        <button type="button" onClick={()=>navigate(-1)} style={{marginTop:"13px"}}>Cancelar</button>
      </Form>
    </ContainerHome>
  )
};