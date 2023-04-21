import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext.js";
import {IoAddCircleOutline, IoRemoveCircleOutline, IoLogOutOutline} from "react-icons/io5"
import Transaction from "../components/Transaction.jsx";
import { ButtonTransaction, ContainerButtons, ContainerHome, ContainerTotal, ContainerTransactions, Header } from "../components/Styled.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Home(){
  const {user, setUser} = useContext(UserContext)
  const [transactions, setTransactions] = useState(null)  
  const [total, setTotal] = useState(0)
  const navigate = useNavigate();

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem("user"))
    let config
    if(savedUser){
        setUser(savedUser)
        config = {
          headers:{
            Authorization: `Bearer ${savedUser.token}`
          }
        }
      } else {
        navigate("/")
    }
    
    
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`,config)
      .then((res) =>{        
        setTransactions(res.data)
        getTotal(res.data)
      })
      .catch(err => console.log(err));
        

  },[])
  
  function getTotal(arr){    
    let sum = 0;
    arr.forEach(el => {
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
      <Header><h1>{`Olá, ${user?.name}`}</h1> <IoLogOutOutline style={{cursor:"pointer"}} onClick={logout} size={"25px"} color="#FFFFFF" /> </Header>
      <ContainerTransactions>
        <div>
        {(transactions && transactions.length !== 0)? transactions.map(el=> 
        <Transaction key={el._id} date={el.date}
        description={el.description}
        value={el.value}
        type={el.type}
        id={el._id}
        />) : <h2>Não há registros de entrada ou saída</h2>}
        </div>
        <ContainerTotal>
          {(transactions && transactions.length !== 0)? <>
          <h3><strong>SALDO</strong></h3>
          <h3 style={{color: total>0? "#03AC00" : "#C70000"}}>{Math.abs(total).toFixed(2).replace(".",",")}</h3>
          </> : ""}
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
