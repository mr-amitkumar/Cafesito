import { styled } from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #333;
  color: white;
`;
const Para = styled.p`
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: 10px;
  color: grey;
  text-align: center;
`;
const Head = styled.h1`
  font-size: 1.5rem;
  font-family: verdana;
  letter-spacing: 5px;
  font-weight: 400;
`;
const Linker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StyledLinked = styled(Link)`
  text-decoration: none;
  color: tomato;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: sans-serif;
  gap: 10px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Head>Cafesito</Head>
        <Linker>
          <StyledLinked to="/privacy">Privacy Policy</StyledLinked>
          <StyledLinked to="/termsandconditions">
            Terms of Services
          </StyledLinked>
        </Linker>
        <Para>Made with ❤️ by Cafesito</Para>
        <Para>© 2023 Cafesito. All rights reserved.</Para>
      </FooterContainer>
    </>
  );
};
export default Footer;
