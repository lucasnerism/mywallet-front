import { Link } from "react-router-dom";
import { ContainerTransaction } from "./Styled.js";

export default function Transaction({date, description, value, type}){
  
  function deleteEntry(){}

  return(
    <ContainerTransaction>
      <div>
        <p style={{color: "#C6C6C6", marginRight: "10px"}}>{date}</p>
        <p onClick={deleteEntry} style={{cursor: "pointer"}}> {description}</p>
      </div>
      <div>
        <p style={{color: type === "in"? "#03AC00" : "#C70000", marginRight: "10px"}} >{value}</p>
        <Link>
        <p style={{color: "#C6C6C6", cursor: "pointer"}}>x</p>
        </Link>
      </div>
    </ContainerTransaction>
  )
}