import React from 'react'
import styled, { keyframes } from 'styled-components';

const Advant = () => {
  return (
    <Container>
      <AdvantBlock>
        <AdvantCard>
          <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png"/>
          <CardTitle>Balance</CardTitle>
        </AdvantCard>

        <AdvantCard>
          <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-movement-100_nstszv.png"/>
          <CardTitle>Movement</CardTitle>
        </AdvantCard>

        <AdvantCard>
          <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-flying-100_n2ix9n.png"/>
          <CardTitle>Flying</CardTitle>
        </AdvantCard>

        <AdvantCard>
          <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-events-100_sdfoba.png"/>
          <CardTitle>Events</CardTitle>
        </AdvantCard>

        <AdvantCard>
          <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-map-100_tpkres.png"/>
          <CardTitle>Leaderships</CardTitle>
        </AdvantCard>

        <AdvantCard>
          <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124055/icons8-cold-96_ldqbnb.png"/>
          <CardTitle>Cold</CardTitle>
        </AdvantCard>
      </AdvantBlock>
      <MainBlock>
        <MainImg>
          <FirstImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/rotatee-2.png"/>
          <SecondImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/datac-about-1.png"/>
        </MainImg>
        <MainInfo>
          <FirstBlock>
            <Title>Superior technologies we use based on data</Title>
            <SubTitle>With data science, we work on data by extracting meaningful insights for the business. We work by combining mathematics, statistics, artificial intelligence and computer engineering to analyze large amounts of data.</SubTitle>
          </FirstBlock>

          <SecondBlock>
            <MainProfileImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713127036/janecek_qiekoj.jpg"/>
            <MainProfileText>
              <SubTitle>Nadace Science 21 je mou srdcovou záležitosti. Děti a mladé lidi vede k vědě, a tedy i vědění</SubTitle>
              <SubTitleName>Karel Janeček</SubTitleName>
            </MainProfileText>
          </SecondBlock>

          <ThirdBlock>
              <MainButton>Get to know us →</MainButton>
          </ThirdBlock>
        </MainInfo>
      </MainBlock>
    </Container>
  )
}

export default Advant

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #0166A0, #000000);
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;

`;

const AdvantBlock = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 50px;
`;

const MainBlock = styled.div`
  display: flex;
  align-items: center;
`;

const AdvantCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  width: 175px;
  height: 250px;
  background: linear-gradient(to right, #0166A0, #000000);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  transition: transform 0.3s ease; /* Добавление плавного перехода при изменении transform */
  
  &:hover {
    transform: scale(1.15); /* Увеличение размера на 5% при наведении */
  }
`;

const CardImg = styled.img`
  height: 63px;
  width: 63px;
`;

const CardTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const MainImg = styled.div`
  position: relative;
  max-width: 50%;
  bottom: 10px;

`;

const FirstImg = styled.img`
  position: absolute;
  bottom: -10%;
  left: 1%;
  width: 50%;
  animation: ${rotateAnimation} 16s linear infinite;

`;

const SecondImg = styled.img`
  position: relative;
  /* max-width: 90%; */
  width: 50%;
  bottom: -80px;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 625px;
  gap: 20px;
  margin-bottom: 40px;
`;

const FirstBlock = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

const SecondBlock = styled.div`
  color: #fff;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid #fff;
  padding: 20px;
`;

const ThirdBlock = styled.div`
  color: #fff;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 16px;
`;

const SubTitleName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const MainProfileImg = styled.img`
  width: 100px;
  border-radius: 50%;
  
`;

const MainProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

const MainButton = styled.button`
  background: linear-gradient(to right, #0166A0, #000000);
  border: none;
  color: #fff;
  padding: 20px 20px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Добавляем тень */
  transition: background-color 0.3s, transform 0.3s; /* Плавное изменение цвета и размера при наведении */

  &:hover {
    background: linear-gradient(to right, #4a8bc2, #1f1f1f); /* Светлее градиент */
    transform: scale(1.05); /* Немного увеличиваем размер при наведении */
  }
`;