import React from 'react'
import styled from 'styled-components'

const HomeFooter = () => {
  return (
    <Container>
      <MainInfo>
        <LogoBlock >
          <LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713133432/Sience_fqylks.svg" />
        </LogoBlock>
      </MainInfo>
      <ContactInfo>
        <PhoneBlock>
          <MainImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713138342/icons8-phone-100_inogd4.png' />
          <Info>
            <Title>Customer Service</Title>
            <SubTitle>+420-212-121-212</SubTitle>
          </Info>
        </PhoneBlock>
        <EmailBlock>
          <MainImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713138343/icons8-email-96_jladop.png' />
          <Info>
            <Title>Information and Complaint</Title>
            <SubTitle>info@science21.cz</SubTitle>
          </Info>
        </EmailBlock>
      </ContactInfo>
    </Container>
  )
}

export default HomeFooter

const Container = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(to left, #0166A0, #000000);
  min-height: 40vh;
  justify-content: space-between;
  gap: 80px;
  align-items: center;

`;

const MainInfo = styled.div`
  display: flex;
  
`;

const LogoBlock = styled.div`
  cursor: pointer;
  z-index: 100;
  margin-left: 80px; 
`;

const LogoImg = styled.img`
  width: 380px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
`;

const PhoneBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const EmailBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MainImg = styled.img`
  width: 80px;
  height: 80px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.span`
  color: #fff;
  font-size: 16px;
`;

const SubTitle = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;