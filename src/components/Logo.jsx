import styled from "styled-components";

export default function Logo(){
  return(
    <Container>
      <h1>MyWallet</h1>
    </Container>
  )
}

const Container = styled.div`
  font-family: 'Saira Stencil One', cursive;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
`