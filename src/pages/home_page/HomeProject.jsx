import React from 'react'
import styled from 'styled-components'

const HomeProject = () => {
  return (
    <Container>
      <FirstBlock>
        <Title>Our Projects that make a difference for the future of work</Title>
        <SubTitle>A better step into the future with our IT service.</SubTitle>
        <CardBlock>
          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2023/09/services-ai-18.jpg" />
            <TextBlock>
              <CardTitle>
                Data Science
              </CardTitle>
              <CardSubTitle>
                Our best data science projects
              </CardSubTitle>
            </TextBlock>
          </CardItem>


          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2022/12/small-services-technit-4.jpg" />
            <TextBlock>
              <CardTitle>
                Server Storage

              </CardTitle>
              <CardSubTitle>
                Our best server storage projects
              </CardSubTitle>
            </TextBlock>
          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2022/12/small-project-3.jpg" />
            <TextBlock>
              <CardTitle>
                Server Virtualization

              </CardTitle>
              <CardSubTitle>
                Our best server virtualization projects
              </CardSubTitle>
            </TextBlock>
          </CardItem>

          <CardItem>
            <CardImg src="https://garantiwebdesign.com/wordpress/datac/wp-content/uploads/2022/12/small-project-4.jpg" />
            <TextBlock>
              <CardTitle>
                Network Solutions

              </CardTitle>
              <CardSubTitle>
                Our best network solutions projects
              </CardSubTitle>
            </TextBlock>
          </CardItem>
        </CardBlock>
      </FirstBlock>
      <MainButton>All services</MainButton>
    </Container>
  )
}

export default HomeProject


const CardImgAdvant = styled.img`
  height: 63px;
  width: 63px;
`;

const TextBlock = styled.div`
  position: absolute;
  bottom: -2px;
  background: linear-gradient(to right, #0166A0, #000000);
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  gap: 10px;
  border-radius: 5px;
  z-index: 10;
`;

const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-left: 10px;
`;

const CardSubTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-left: 10px;
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
  min-height: 100vh;
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
  width: 280px;
  height: 420px;
  border-radius: 5px;
  position: relative;
  overflow: hidden; /* чтобы обрезать содержимое, если псевдоэлемент будет выходить за границы карточки */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* полупрозрачный черный цвет */
    z-index: 1; /* помещаем псевдоэлемент над содержимым карточки */
  }
  
  

 
`;

const CardImg = styled.img`
  width: 100%;
  border-radius: 5px;
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