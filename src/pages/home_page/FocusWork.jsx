import React from 'react'
import styled from 'styled-components'

const FocusWork = () => {
  return (
    <Container>
      <FirstBlock>
        <Title>Check out our focused work process</Title>
        <SubTitle>Our working process for the most accurate data science.</SubTitle>
        <CardBlock>
          <CardItem>
            <BlockImgSmall>
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png" />
            </BlockImgSmall>
            <TitleImg>Analysis</TitleImg>
            <SubTitleImg>We do the right analysis so that the data is obtained correctly.</SubTitleImg>


          </CardItem>



          <CardItem>
            <BlockImgBig>
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png" />
            </BlockImgBig>
            <TitleImg>Planning</TitleImg>
            <SubTitleImg>We plan the workload to make it more efficient.</SubTitleImg>

          </CardItem>

          <CardItem>
            <BlockImgSmall>
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png" />
            </BlockImgSmall>
            <TitleImg>Calculation</TitleImg>
            <SubTitleImg>We plan the time flow in the software process.</SubTitleImg>

          </CardItem>

          <CardItem>
            <BlockImgBig>
              <CardImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713124054/icons8-balance-100_ugqjnc.png" />
            </BlockImgBig>
            <TitleImg>Application</TitleImg>
            <SubTitleImg>We plan the workload to make it more efficient.</SubTitleImg>
          </CardItem>
        </CardBlock>
      </FirstBlock>

    </Container>
  )
}

export default FocusWork

const BlockImgSmall = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to left, #0166A0, #000000);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlockImgBig = styled.div`
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
  min-height: 70vh;
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
  width: 50%;
`;

const TitleImg = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitleImg = styled.span`
  font-size: 16px;
  
`;

