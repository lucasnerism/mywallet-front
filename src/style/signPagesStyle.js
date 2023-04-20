import styled from "styled-components";

export const Container = styled.div`
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
  }
`;