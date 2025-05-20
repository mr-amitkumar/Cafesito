import { styled } from "styled-components";
import PrivacyImg from "../assets/Pvc.jpg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 30rem 0rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
    padding: 30rem 0rem;
  }
`;
const ContHead = styled.h1`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  color: black;
  font-size: 2.5rem;
  text-align: center;
  font-family: verdana;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 20px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 6px 50px;
  }
`;

const SubContainer = styled.div`
  padding: 7.9rem 12rem;
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
const ContHeadsec = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
`;
const ContSubHead = styled.h2`
  color: black;
  padding: 20px;
  font-size: 1rem;
  font-family: verdana;
`;

const ContPara = styled.p`
  font-size: 0.9rem;
  color: black;
  margin-top: 10px;
  padding: 2px 1px;
  font-family: sans-serif;
  margin-left: 10px;
`;
const Privacy = () => {
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${PrivacyImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SubContainer>
          <ContHead>Privacy Policy</ContHead>
          <ContHeadsec>
            <ContSubHead>Information we collect</ContSubHead>
            <ContPara>
              We collect personal information that you provide to us, such as
              your name, email address, and preferences, when you use our
              services or contact us.
            </ContPara>
            <ContSubHead>How We Use Your Information</ContSubHead>
            <ContPara>
              We use your information to provide and improve our services,
              respond to your inquiries, and ensure a better user experience
            </ContPara>
            <ContSubHead>Sharing Your Information</ContSubHead>
            <ContPara>
              Your information is not shared with third parties unless required
              by law or to provide essential services on our behalf.
            </ContPara>
            <ContSubHead>Contact Us</ContSubHead>
            <ContPara>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@cafecito.com.
            </ContPara>
          </ContHeadsec>
        </SubContainer>
      </Container>
    </>
  );
};

export default Privacy;
