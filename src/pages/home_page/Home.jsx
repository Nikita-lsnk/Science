import React from 'react'
import styled from 'styled-components'
import Advant from './Advant'
import HomeService from './HomeService'
import FocusWork from './FocusWork'
import HomeProject from './HomeProject'
import HomeWorker from './HomeWorker'
import HomeFooter from './HomeFooter'

const Home = () => {
  return (
    <Container>
      <MainImg>
        <MainText>
          <Title>We are adventurous scientists <br />and scientific adventurers.</Title>
          {/* <Title>Rely on big data </Title> */}
          {/* <SubTitle>We are adventurous scientists and scientific adventurers.</SubTitle> */}
        </MainText>
        <LogoBlock >
          
            <LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713133432/Sience_fqylks.svg" />
          

        </LogoBlock>
      </MainImg>
      <Advant />
      <HomeService />
      <FocusWork />
      <HomeProject/>
      <HomeWorker/>
      <HomeFooter/>
    </Container>
  )
}

export default Home

const LogoBlock = styled.div`
  /* cursor: pointer; */
  z-index: 100;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LogoImg = styled.img`
  width: 400px;
  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  
`;

const MainText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  bottom: 40px; /* Вы можете настроить отступ снизу, как вам угодно */
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.span`
  font-size: 48px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const MainImg = styled.div`
  min-height: 100vh;
  background: url("https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/Untitled-42.gif") center;
  background-size: cover; /* Изображение будет масштабироваться так, чтобы полностью покрывать задний план */
  position: relative; /* Устанавливаем позицию относительно, чтобы псевдоэлемент был относительно этого контейнера */
  width: 100%;
  height: 100%;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Цвет затемнения (черный с прозрачностью 0.5) */
  }
`;
