import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import './Header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { useTranslation } from 'react-i18next';

const Header = () => {

  const [isFixed, setIsFixed] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();

  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/home")
  }


  useEffect(() => {
    const handleClick = (e) => {
      if (e.target !== menuRef.current && e.target !== buttonRef.current) {
        setOpenDrop(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const location = useLocation();

  // console.log(isFixed);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShareBtnClick = (e) => {
    e.stopPropagation();
    setOpenDrop(!openDrop);
  };

  

  return (
    <Container>
      
      <NavBlock className={isFixed ? "fixed" : ""}>

        <NavBlockContainer >
          
         
          <NavMenuContent
            onClick={() => setNav(false)}
            className={nav ? "active" : ""}
          >
            <NavMenu
            >
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("home".toLowerCase())
                    ? "Activate"
                    : ""
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("about".toLowerCase())
                    ? "Activate"
                    : ""
                }
                
              >
                About
              </NavLink>
              <DropMenu>
                <ShareBtn
                  className={
                    location.pathname
                      .toLowerCase()
                      .includes("bus".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("car".toLowerCase())
                      ||
                      location.pathname.toLowerCase().includes("truck".toLowerCase())
                      ? "bus"
                      : ""
                  }
                  ref={buttonRef}
                  onClick={handleShareBtnClick}
                >
                  Services

                 
                  {/* {openDrop === true ?

                  <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662804/icons8-chevron-down-26_6_qkm4l3.png" />
                  :
                  <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662838/icons8-chevron-down-26_4_zxupr0.png" />
                } */}

                </ShareBtn>
                {openDrop && (
                  <DropDown
                    ref={menuRef}
                  >
                    <List>
                      <NavLinkDrop
                        className={
                          location.pathname
                            .toLowerCase()
                            .includes("bus".toLowerCase())
                            ? "Activate"
                            : ""
                        }
                        
                      >
                        Services
                      </NavLinkDrop>
                      <NavLinkDrop
                        className={
                          location.pathname
                            .toLowerCase()
                            .includes("car".toLowerCase())
                            ? "Activate"
                            : ""
                        }
                        
                      >
                        Service Detail
                      </NavLinkDrop>
                      
                    </List>
                  </DropDown>
                )}
              </DropMenu>
              {/* <NavLink
              className={
                location.pathname
                  .toLowerCase()
                  .includes("bus".toLowerCase())
                  ? "Activate"
                  : ""
              }
              to="/bus"
            >
              
              <ImgArrow src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1698662838/icons8-chevron-down-26_4_zxupr0.png" />
            </NavLink> */}
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("distance".toLowerCase())
                    ? "Activate"
                    : ""
                }
                
              >
                Projects
              </NavLink>
              <NavLink
                className={
                  location.pathname
                    .toLowerCase()
                    .includes("price".toLowerCase())
                    ? "Activate"
                    : ""
                }
                
              >
                Articles
              </NavLink>
              
            </NavMenu>
          </NavMenuContent>

          <LogoBlock onClick={handleGoToHome}>
            {isFixed ?
              <LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713133432/Sience_fqylks.svg" />
              :
              <LogoImg src="https://res.cloudinary.com/dmxoqnqsu/image/upload/v1713133432/Sience_fqylks.svg" />
            }

          </LogoBlock>

          <BurgerBtn onClick={() => setNav(!nav)}>
            {/* {nav ? (
              <AiOutlineClose
                size={25}
                color={"#ffffff"}
              />
            ) : (
              <AiOutlineMenu
                color={"#ffffff"}
                size={25}
              />
            )} */}
          </BurgerBtn>

        </NavBlockContainer>

      </NavBlock>
      {/* <header className={isFixed ? "fixed" : ""}>
        <h1>Мой фиксированный заголовок</h1>
      </header> */}

    </Container>
  )
}

export default Header

const NavMenuContent = styled.div`
  @media screen and (max-width: 1200px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 220px;
    margin: 0;
    top:50px;
    left: -120%;
    padding-left: 38px;
    background-color: ${(props) => (props.$isDarkTheme ? "#22272B" : "white")};
    width: 100%;
    height: 100vh;
    z-index: 11;
  }
`;

const BurgerBtn = styled.div`
  
  
  @media screen and (max-width: 1200px) {
    display: flex;
    cursor: pointer;
    align-self: center;
    z-index: 100;
  }
`;



const List = styled.div`
  width: 228px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DropMenu = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  position: absolute;
  right: -90px;
  top: 44px;
  background: linear-gradient(to right, #0166A0, #000000);
  border: none;
  /* border-radius: 20px; */
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1000;
  border-radius: 10px;
  @media screen and (max-width:320px) {
    right: -35px;
  }
  @media screen and (max-width: 1120px) {
    right: 0;
    top: -40px;
    left: 120px;
    max-width: 232px;
  }
  @media screen and (max-width: 430px) {
    left: 0px;
    top: 50px;
  }
`;

const ShareBtn = styled.button`
  text-decoration: none;
  font-size: 18px;
  background: transparent;
  font-family: 'Verdana Pro Regular';
  border: none;
  color: #fff;
  font-weight: 700;
  transition: .3s all ease;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  /* margin-top: 5px; */
  /* justify-content: center; */
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0); /* Начальное состояние: невидимая полоска */
    transform-origin: right; /* Полоска будет расширяться вправо */
    transition: transform 0.5s ease; /* Анимация для выезда */
  }

  &:hover::before {
    transform: scaleX(1); /* При наведении полоска выезжает */
    transform-origin: left; /* Изменяем точку, откуда начнется анимация */
  }
  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 100;
  /* margin-top: 20px; */
  /* margin: 0 auto; */
`;






const ImgArrow = styled.img`
  width: 13px;
  height: 13px;
  cursor: pointer;
  
  
`;






const NavBlock = styled.div`
  width: 100%;
  position: fixed;
  right:0;
  left: 0;
  margin-top: 0px;
  padding: 20px 0;
  transition: .3s all ease;
  
  
  
`;



const NavBlockContainer = styled.div`
  width: calc(100% - 160px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 80px);
    margin: 0 auto;
  }
  @media screen and (max-width: 1120px) {
    gap: 20px;
  }
  
`;

const LogoBlock = styled.div`
  cursor: pointer;
  z-index: 100;
  margin-left: -520px;
`;

const LogoImg = styled.img`
  width: 120px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    gap: 20px;
  }
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    margin-top: 10px;
    width: calc(100% - 80px);
  }
  
  
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  position: relative;
  padding: 5px 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0); /* Начальное состояние: невидимая полоска */
    transform-origin: right; /* Полоска будет расширяться вправо */
    transition: transform 0.5s ease; /* Анимация для выезда */
  }

  &:hover::before {
    transform: scaleX(1); /* При наведении полоска выезжает */
    transform-origin: left; /* Изменяем точку, откуда начнется анимация */
  }
`;

const NavLinkDrop = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  position: relative;
  padding: 5px 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0); /* Начальное состояние: невидимая полоска */
    transform-origin: right; /* Полоска будет расширяться вправо */
    transition: transform 0.5s ease; /* Анимация для выезда */
  }

  &:hover::before {
    transform: scaleX(1); /* При наведении полоска выезжает */
    transform-origin: left; /* Изменяем точку, откуда начнется анимация */
  }
`;