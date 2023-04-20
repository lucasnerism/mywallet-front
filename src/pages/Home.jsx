import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext.js";
import {IoAddCircleOutline, IoRemoveCircleOutline, IoLogOutOutline} from "react-icons/io5"
import Transaction from "../components/Transaction.jsx";
import { ButtonTransaction, ContainerButtons, ContainerHome, ContainerTotal, ContainerTransactions, Header } from "../components/Styled.js";
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function Home(){
  const {user} = useContext(UserContext)
  const [transactions, setTransactions] = useState(null)  
  const [total, setTotal] = useState(0)
  const navigate = useNavigate();

  function getTotal(){    
    let sum = 0;
    transactions.forEach(el => {
      if(el.type === "out"){
        sum-=el.value
      } else {
        sum+=el.value
      }
    });
    setTotal(sum);
  }

  function logout(){
    localStorage.removeItem("user")
    navigate("/")
  }

  return(
    <ContainerHome>
      <Header><h1>{`Olá, ${user}`}</h1> <IoLogOutOutline onClick={logout} size={"25px"} color="#FFFFFF" /> </Header>
      <ContainerTransactions>
        <div>
      <Transaction date={"20/04"}
        description={"salário"}
        value={"10000,00"}
        type={"in"}
        />
        <Transaction date={"21/04"}
        description={"guitarra"}
        value={"5000,00"}
        type={"out"}
        />
        {/* {transactions? transactions.map(el=> 
        <Transaction date={el.date}
        description={el.description}
        value={el.value}
        type={el.type}
        />) : <h2>Não há registros de entrada ou saída</h2>} */}
        </div>
        <ContainerTotal>
          <h3><strong>SALDO</strong></h3><h3>{total}</h3>
        </ContainerTotal>
      </ContainerTransactions>
      <ContainerButtons>
        <Link to={"/nova-transacao/in"}>
          <ButtonTransaction><IoAddCircleOutline size={"25px"} /><h2>Nova entrada</h2></ButtonTransaction>
        </Link>
        <Link to={"/nova-transacao/out"}>
          <ButtonTransaction><IoRemoveCircleOutline size={"25px"} /><h2>Nova saída</h2></ButtonTransaction>
        </Link>
      </ContainerButtons>      
    </ContainerHome>
  )
}
