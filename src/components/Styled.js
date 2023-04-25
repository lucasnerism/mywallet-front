import styled from "styled-components";

export const ContainerApp = styled.div`
width: 375px;
margin: auto;
`;

export const ContainerSign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 159px;
  p{
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 36px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  input{
    width: 326px;
    height: 58px;
    padding: 17px;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border-radius: 5px;
    border: none;
    margin-bottom: 13px;
    ::placeholder{
      color:#000000
    }
  }
  button{
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :disabled{
      opacity: 0.7;
    }
  }
`;

export const ContainerHome = styled.div`
  padding-top: 25px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 326px;
  margin-top: 13px;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;  
  white-space: nowrap;  
  h1{
    color: #FFFFFF;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width:290px ;
  }
`;

export const ContainerTransactions = styled.div`
  width: 326px;
  height: 446px;
  border-radius: 5px;
  background-color: #FFFFFF;
  position: relative;  
  margin-top: 22px ;
  padding: 23px 12px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% ,-50%);
    color: #868686;
    text-align: center;
    font-size: 20px;
    line-height: 23px;
    width: 200px;
  }
  div{
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }
    
  }
`;

export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  height: 40px;
  background-color: #FFFFFF;
  strong{
    font-weight: 700;
  }
`;

export const ContainerTransaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-bottom: 18px;
  div{
    display: flex;    
  }
`;

export const ButtonTransaction = styled.button`
  width: 155px;
  height: 114px;
  border-radius: 5px;
  background-color: #A328D6;
  padding: 10px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  h2{
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    width: 40px;
  }
`;

export const ContainerLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;