import { styled } from "styled-components";
import TImg from "../assets/T&C.jpg";

const TContainer = styled.div`
  height: 658px;
  display: flex;
  padding: 30rem 0rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
    padding: 30rem 0rem;
    text-align:center;
  }
`;
const ContHead = styled.h1`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  color: black;
  font-size: 2.5rem;
  text-align: center;
  font-family: verdana;
  font-weight: 500;
  border-radius: 6px;
  margin-bottom: 20px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 6px 50px;
  }
`;

const TSubContainer = styled.div`
  padding: 11rem 12rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: auto;
    margin-top: -10px;
    margin-bottom: -10px;
  }
`;

const ContSubHead = styled.h2`
  color: black;
  padding: 20px;
  font-size: 1rem;
  font-family: verdana;
`;

const ContPara = styled.p`
  font-size: 0.9rem;
  line-height: 1;
  color: black;
  padding: 2px 10px;
  font-family: sans-serif;
`;
const ContHeadsec = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
`;
const TremsAndConditions = () => {
  return (
    <>
      <TContainer
        style={{
          backgroundImage: `url(${TImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TSubContainer>
          <ContHead>Terms of Services</ContHead>
          <ContHeadsec>
          <ContSubHead>Acceptance of Terms</ContSubHead>
          <ContPara>
            By accessing or using our services, you agree to comply with these
            Terms of Services. If you do not agree with any part of these terms,
            please do not use our services.
          </ContPara>
          <ContSubHead>Use of Services</ContSubHead>
          <ContPara>
            You agree to use our services only for lawful purposes and in
            accordance with these terms. You are responsible for any content you
            post or share through our services.
          </ContPara>
          <ContSubHead>Intellectual Property</ContSubHead>

          <ContPara>
            All content, trademarks, and other intellectual property rights
            associated with our services are owned by us or our licensors. You
            may not use, reproduce, or distribute any content without our prior
            written consent.
          </ContPara>
          </ContHeadsec>
        </TSubContainer>
      </TContainer>
    </>
  );
};
export default TremsAndConditions;
