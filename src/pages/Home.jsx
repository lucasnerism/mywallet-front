import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext.js";
import {IoAddCircleOutline, IoRemoveCircleOutline, IoLogOutOutline} from "react-icons/io5"
import { Oval } from "react-loader-spinner";
import Transaction from "../components/Transaction.jsx";
import { ButtonTransaction, ContainerButtons, ContainerHome, ContainerLoading, ContainerTotal, ContainerTransactions, Header } from "../components/Styled.js";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/apiServices.js";


export default function Home(){
  const {user} = useContext(UserContext)
  const [transactions, setTransactions] = useState(null)
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user.token){        
      navigate("/")
      } else {        
          api.getTransaction(user.token)
          .then((res) =>{        
            setTransactions(res.data)
            getTotal(res.data)
            setLoading(false)
          })
          .catch((err) => {
            alert(err.response.data)                    
          });
      }
    
    
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

  if(loading){
    return(
      <ContainerLoading>
        <Oval
        height={80}
        width={80}
        color="#FFFFFF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}    
        />
      </ContainerLoading>
    )
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
          <h3 style={{color: total>=0? "#03AC00" : "#C70000"}}>{Math.abs(total).toFixed(2).replace(".",",")}</h3>
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
