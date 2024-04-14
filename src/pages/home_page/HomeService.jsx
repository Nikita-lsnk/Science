import React from 'react'
import styled from 'styled-components'

const HomeService = () => {
  return (
    <Container>
      <FirstBlock>
        <Title>Our happy customers make us who we are</Title>
        <SubTitle>Let us reserve your place.</SubTitle>
        <CardBlock>
          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/c-logo-5.png" />

          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/c-logo-6.png" />

          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/c-logo-4.png" />

          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/c-logo-3.png" />

          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/c-logo-2.png" />

          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/c-logo-1.png" />

          </CardItem>
        </CardBlock>
      </FirstBlock>
      <SecondBlock>
        <Title>Discover our latest technological services</Title>
        <SubTitle>There is always a solution.</SubTitle>
        <AdvantBlock>
          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png" />
            <CardTitle>Balance</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-movement-100_nstszv.png" />
            <CardTitle>Movement</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-flying-100_n2ix9n.png" />
            <CardTitle>Flying</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-events-100_sdfoba.png" />
            <CardTitle>Events</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-map-100_tpkres.png" />
            <CardTitle>Leaderships</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124055/icons8-cold-96_ldqbnb.png" />
            <CardTitle>Cold</CardTitle>
          </AdvantCard>


          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png" />
            <CardTitle>Balance</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-movement-100_nstszv.png" />
            <CardTitle>Movement</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-flying-100_n2ix9n.png" />
            <CardTitle>Flying</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-events-100_sdfoba.png" />
            <CardTitle>Events</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-map-100_tpkres.png" />
            <CardTitle>Leaderships</CardTitle>
          </AdvantCard>

          <AdvantCard>
            <CardImgAdvant src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124055/icons8-cold-96_ldqbnb.png" />
            <CardTitle>Cold</CardTitle>
          </AdvantCard>
        </AdvantBlock>
        <MainButton>All services</MainButton>
      </SecondBlock>
    </Container>
  )
}

export default HomeService

const AdvantCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  width: 210px;
  height: 176px;
  background: linear-gradient(to right, #0166A0, #000000);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  transition: transform 0.3s ease; /* Добавление плавного перехода при изменении transform */
  
  &:hover {
    
    transform: scale(1.15); /* Увеличение размера на 5% при наведении */
  }
`;

const CardImgAdvant = styled.img`
  height: 63px;
  width: 63px;
`;

const CardTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const AdvantBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  gap: 40px;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left, #0166A0, #000000);
  min-height: 135vh;
  justify-content: flex-start;
  gap: 80px;
  align-items: center;

`;

const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  color: #fff;
`;

const SecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 20px;

`;

const CardBlock = styled.div`
  display: flex;
  gap: 60px;
`;

const CardItem = styled.div`
  width: 165px;
  height: 135px;
  border: 1px solid #fff;
  padding: 5px;
  transition: transform 0.3s ease; /* Добавляем плавный переход при изменении transform */

  &:hover {
    transform: translateY(-5px); /* Поднимаем элемент на 5px при наведении */
  }
`;

const CardImg = styled.img`
  width: 100%;
`;

const MainButton = styled.button`
  background: linear-gradient(to left, #0166A0, #000000);
  border: none;
  color: #fff;
  padding: 20px 40px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Добавляем тень */
  transition: background-color 0.3s, transform 0.3s; /* Плавное изменение цвета и размера при наведении */

  &:hover {
    background: linear-gradient(to right, #0166A0, #000000);
    transform: scale(1.05); /* Немного увеличиваем размер при наведении */
  }
`;