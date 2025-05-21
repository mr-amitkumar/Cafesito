import { styled } from "styled-components";
import Contactimg from "../assets/Contact.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  padding: 40rem 0rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
    padding: 60rem 0rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  width: 70%;
`;
const Heading = styled.h1`
  font-size: 2.4rem;
  font-family: verdana;
  font-weight: 500;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align:center;
  }
`;
const SubHead = styled.h2`
  color: black;
  padding: 20px;
  font-size: 1.5rem;
  font-family: verdana;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
const Paragraph = styled.p`
  font-size: 0.9rem;
  color: black;
  margin-top: 10px;
  padding: 2px 1px;
  font-family: sans-serif;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GoogleMapContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const Direction = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-top: 20px;
  width: 70%;
`;
const Dh = styled.h1`
  font-size: 1.6rem;
  font-family: verdana;
  font-weight: 500;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const DPara = styled.p`
  font-size: 0.95rem;
  font-family: sans-serif;
  color: black;
  margin-top: 10px;
  padding: 2px 1px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FaFacebookILink = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5rem;
  color: #3b5998;
  cursor: pointer;
  &:hover {
    color: #2d4373;
    transition: 0.3s;
  }
      
`;
const FaInstagramILink = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5rem;
  color: #e1306c;
  cursor: pointer;
  &:hover {
    color: #c13584;
    transition: 0.3s;
  }
`;
const Contact = () => {
  return (
    <>
      <ContactContainer
        style={{
          backgroundImage: `url(${Contactimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SubContainer>
          <Heading>Visit us at the trail head</Heading>
          <Paragraph>
            We're conveniently located at the start of your favorite hiking
            trails, making us the perfect spot for a pre-hike energizer or a
            post-adventure meal.
          </Paragraph>
          <Paragraph>
            Whether you're a local or just passing through, we can't wait to
            welcome you to Cafecito!
          </Paragraph>
          <SubHead>Contact Info.</SubHead>
          <Paragraph>
            <strong>Address:</strong>123 Trailhead Way, Mountain Town, MT 98765
          </Paragraph>
          <Paragraph>
            <strong>Phone:</strong>(123) 456-7890
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> cafecito@gmail.com
          </Paragraph>
          <Paragraph>
            <strong>Hours:</strong> Mon-Sun: 7am - 7pm
          </Paragraph>
          <Paragraph>
            <strong>Follow us on:</strong>
            <FaFacebookILink
              href="https://www.facebook.com/Cafesito.Coffeeshops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </FaFacebookILink>

            <FaInstagramILink
              href="https://www.instagram.com/cafes.of.india/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </FaInstagramILink>
          </Paragraph>
        </SubContainer>

        <GoogleMapContainer>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.41106343492!2d120.61775497424073!3d14.969869667931007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965fe08f8b2285%3A0xc6c8e4de44d460ea!2sCafesito!5e0!3m2!1sen!2sin!4v1746469435056!5m2!1sen!2sin"
            width="90%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </GoogleMapContainer>

        <Direction>
          <Dh>Directions:</Dh>
          <DPara>
            To reach us, simply follow the main road leading to Mountain Town.
            As you approach the trailhead, look for our cozy café on the right
            side of the road. We are located just before the entrance to the
            hiking trails. Our friendly staff will be ready to serve you a
            delicious cup of coffee and a hearty meal to fuel your adventure!
          </DPara>
          <DPara>
            <strong>Public Transport:</strong> If you're using public transport,
            take the Mountain Town Shuttle to the Trailhead Stop. From there,
            it's just a short 5-minute walk to Cafecito.
          </DPara>
          <DPara>
            <strong>Parking:</strong> We have ample parking space available for
            our customers. Please park in the designated area to ensure a smooth
            flow of traffic.
          </DPara>
          <DPara>
            <strong>Tips:</strong>Look for the big coffee cup mural on our west
            wall! It's a great photo spot and a landmark for finding us easily.
          </DPara>
        </Direction>
      </ContactContainer>
    </>
  );
};
export default Contact;
