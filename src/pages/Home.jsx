import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext.js";
import {IoAddCircleOutline, IoRemoveCircleOutline, IoLogOutOutline} from "react-icons/io5"
import Transaction from "../components/Transaction.jsx";
import { ButtonTransaction, ContainerButtons, ContainerHome, ContainerTransactions, Header } from "../components/Styled.js";


export default function Home(){
  const {user} = useContext(UserContext)
  const [transactions, setTransactions] = useState(null)  

  function getTotal(){
    let total = 0
    transactions.forEach(el => {
      if(el.type === "out"){
        total-=el.value
      } else {
        total+=el.value
      }
    });
  }

  return(
    <ContainerHome>
      <Header><h1>{`Olá, ${user}`}</h1> <IoLogOutOutline size={"25px"} color="#FFFFFF" /> </Header>
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
        <div>
          <h3><strong>Saldo</strong></h3><h3>{total}</h3>
        </div>
      </ContainerTransactions>
      <ContainerButtons>
        <ButtonTransaction><IoAddCircleOutline size={"25px"} /><h2>Nova entrada</h2></ButtonTransaction>
        <ButtonTransaction><IoRemoveCircleOutline size={"25px"} /><h2>Nova saída</h2></ButtonTransaction>
      </ContainerButtons>      
    </ContainerHome>
  )
}
