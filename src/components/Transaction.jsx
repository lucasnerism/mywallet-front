import { ContainerTransaction } from "./Styled.js";

export default function Transaction({date, description, value, type}){
  
  return(
    <ContainerTransaction>
      <div><p style={{color: "#C6C6C6", marginRight: "10px"}}>{date}</p><p> {description}</p></div>
      <p style={{color: type === "in"? "#03AC00" : "#C70000"}} >{value}</p>
    </ContainerTransaction>
  )
}