import { Link } from "react-router-dom";
import { ContainerTransaction } from "./Styled.js";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext.js";
import axios from "axios";

export default function Transaction({date, description, value, type, id}){
  const {user} = useContext(UserContext)  

  function deleteEntry(){
    if(window.confirm("Você realmente deseja deletar a operação?")){
    const config ={
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    };
    axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${id}`, config)
      .then(()=> window.location.reload())
      .catch(err => alert(err.response.data))}
  }

  return(
    <ContainerTransaction>
      <div>
        <p style={{color: "#C6C6C6", marginRight: "10px"}}>{date}</p>
        <Link to={`/editar-transacao/${type}/${id}?value=${value}&description=${description}`}>
        <p style={{cursor: "pointer"}}> {description}</p>
        </Link>
      </div>
      <div>
        <p style={{color: type === "in"? "#03AC00" : "#C70000", marginRight: "10px"}} >{value.toFixed(2).replace(".",",")}</p>
        <p onClick={deleteEntry} style={{color: "#C6C6C6", cursor: "pointer"}}>x</p>        
      </div>
    </ContainerTransaction>
  )
}