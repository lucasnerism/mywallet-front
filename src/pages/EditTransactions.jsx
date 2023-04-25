import { ThreeDots } from "react-loader-spinner";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { ContainerHome, Form, Header } from "../components/Styled.js";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/userContext.js";
import api from "../services/apiServices.js";

export default function EditTransaction(){
  const {type, id} = useParams();
  const {user} = useContext(UserContext)
  const [form, setForm] = useState({value:"",description:""})  
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const obj = {value: searchParams.get("value"), description: searchParams.get("description")}    
    setForm(obj)
    if(!user.token){
      navigate("/")      
    }
  },[])

  function handleChange(e){
    const obj = {...form};
    obj[e.target.name]=e.target.value;
    setForm(obj)
  }

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true); 

    const roundValue = Math.round( form.value * 1e2 ) / 1e2

    const body = {value:roundValue , description:form.description.trim(), type}
    api.editTransaction(body, user.token, id)    
      .then(()=>navigate("/home"))
      .catch(err => {
        alert(err.response.data)
        setLoading(false)
      })
  }

  return(
    <ContainerHome>
      <Header><h1>Editar {type === "in"? "entrada": "saída"}</h1></Header>
      <Form onSubmit={handleSubmit}>
        <input name="value" placeholder="Valor" type="number" value={form.value} onChange={handleChange} required />
        <input name="description" placeholder="Descrição" type="text" value={form.description} onChange={handleChange} required />
        <button disabled={loading}>{loading ? <ThreeDots
            height="13"
            width="51"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          /> :`Atualizar ${type === "in"? "entrada": "saída"}`}</button>
        <button type="button" onClick={()=>navigate(-1)} style={{marginTop:"13px"}} disabled={loading}>{loading ? <ThreeDots
            height="13"
            width="51"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          /> :"Cancelar"}</button>
      </Form>
    </ContainerHome>
  )
};