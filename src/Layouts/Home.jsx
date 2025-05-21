import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import BG from "../assets/bg.jpeg";
import BG1 from "../assets/bg-1.jpg";
import BG2 from "../assets/bg-2.jpg";
import BG3 from "../assets/bg-3.jpg";

const images = [BG, BG1, BG2, BG3];

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95vh;
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
  @media (max-width:768px){
  background-position:center;
  }

`;
const HomeDetails = styled.h1`
  font-size: 3rem;
  font-family: verdana;
  font-weight: 500;
  letter-spacing: 30px;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.6);
    @media (max-width: 768px) {
    font-size: 2.9rem;
    letter-spacing: 10px;
  }
`;

const HomePara = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  color: white;
  border-radius: 5px;
    @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 10px;
  }
`;

const HomeButton = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: tomato;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  color: black;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
      @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 10px;
    margin-top: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: #fff;
  }
`;

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HomeContainer $bg={images[currentImageIndex]}>
        <HomeDetails>Cafesito</HomeDetails>
        <HomePara>Be in your own style</HomePara>
        <StyledLink to="/story">
          <HomeButton>Click Here To Visit</HomeButton>
        </StyledLink>
      </HomeContainer>
    </>
  );
};

export default Home;
