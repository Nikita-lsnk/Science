import React from 'react'
import styled from 'styled-components'

const HomeWorker = () => {
  return (
    <Container>
      <FirstBlock>
        <Title>Meet our professional IT team</Title>
        <SubTitle>We are confident that we will open strong networks to your company.</SubTitle>
        <CardBlock>
          <CardItem>
          
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713136299/photo_2024-04-14_20-43-05_cxzhyl.jpg" />
            
            <TitleImg>Kamila Podoubská</TitleImg>
            {/* <SubTitleImg>We do the right analysis so that the data is obtained correctly.</SubTitleImg> */}
            <SocialBlock>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137213/icons8-f-48_f5yx50.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137215/icons8-instagram-64_rpm76h.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137212/icons8-twitter-48_cw7qgm.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137216/icons8-in-48_vqslsy.png'/>
            </SocialBlock>

          </CardItem>



          <CardItem>
          
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713136299/photo_2024-04-14_20-43-05_cxzhyl.jpg" />
            
            <TitleImg>Kamila Podoubská</TitleImg>
            {/* <SubTitleImg>We plan the workload to make it more efficient.</SubTitleImg> */}
            <SocialBlock>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137213/icons8-f-48_f5yx50.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137215/icons8-instagram-64_rpm76h.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137212/icons8-twitter-48_cw7qgm.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137216/icons8-in-48_vqslsy.png'/>
            </SocialBlock>
          </CardItem>

          <CardItem>
          
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713136299/photo_2024-04-14_20-43-05_cxzhyl.jpg" />
            
            <TitleImg>Kamila Podoubská</TitleImg>
            {/* <SubTitleImg>We plan the time flow in the software process.</SubTitleImg> */}
            <SocialBlock>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137213/icons8-f-48_f5yx50.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137215/icons8-instagram-64_rpm76h.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137212/icons8-twitter-48_cw7qgm.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137216/icons8-in-48_vqslsy.png'/>
            </SocialBlock>
          </CardItem>

          <CardItem>
          
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713136299/photo_2024-04-14_20-43-05_cxzhyl.jpg" />
            
            <TitleImg>Kamila Podoubská</TitleImg>
            {/* <SubTitleImg>We plan the workload to make it more efficient.</SubTitleImg> */}
            <SocialBlock>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137213/icons8-f-48_f5yx50.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137215/icons8-instagram-64_rpm76h.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137212/icons8-twitter-48_cw7qgm.png'/>
              <SocialImg src='https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713137216/icons8-in-48_vqslsy.png'/>
            </SocialBlock>
          </CardItem>
        </CardBlock>
      </FirstBlock>

    </Container>
  )
}

export default HomeWorker



const BlockImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(to left, #0166A0, #000000);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #0166A0, #000000);
  min-height: 90vh;
  justify-content: flex-start;
  gap: 80px;
  align-items: center;

`;

const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 280px;
  text-align: center;
  
`;

const CardImg = styled.img`
  width: 100%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  border: 8px solid;
`;

const TitleImg = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitleImg = styled.span`
  font-size: 16px;
  
`;

const SocialBlock = styled.div`
  display: flex;
  gap: 25px;
  
`;

const SocialImg = styled.img`
  width: 24px;
  height: 24px;
`;
