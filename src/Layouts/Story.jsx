import { styled } from "styled-components";
import { Link } from "react-router-dom";
import BgStory from "../assets/story.jpg";
import FImg from "../assets/f1.jpg";
import F2Img from "../assets/f2.jpg";

const StoryContainer = styled.div`
  height: 100vh;
  display: flex;
  padding: 60rem 0rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
    padding: 70rem 0rem;
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  height: 700px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  width: 70%;
`;

const HeadH1 = styled.h1`
  font-size: 2.4rem;
  font-family: verdana;
  font-weight: 500;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    
  }
`;

const HeadPara = styled.p`
  font-size: 0.95rem;
  font-family: sans-serif;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeadJour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-top: 20px;
  width: 70%;
`;

const HeadJH1 = styled.h1`
  font-size: 2.4rem;
  font-family: verdana;
  font-weight: 500;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-weight:500;
  }
`;

const HeadJIn = styled.div`
  display: flex;
  justify-content: center;
  border-left: 3px solid red;
  flex-direction: column;
  margin-left: 3px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin-left: 0px;
    margin-top: 3px;
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  margin-left: 6px;
  font-family: sans-serif;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0px;
  }
`;
const H3P = styled.p`
  font-size: 0.95rem;
  margin-left: 6px;
  font-family: sans-serif;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-left: 0px;
  }
`;

const Values = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-top: 20px;
  width: 70%;
`;
const ValuesHeadH1 = styled.h1`
  font-size: 2.4rem;
  font-family: verdana;
  font-weight: 500;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
    font-weight:500;
  }
`;
const Valuespara = styled.p`
  font-size: 1rem;
  font-family: sans-serif;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.99rem;
  }
`;

const Founder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-top: 20px;
  width: 70%;
`;
const FHead = styled.h1`
  font-size: 2.4rem;
  font-family: verdana;
  font-weight: 500;
  height: 100px;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    font-weight:500;
    margin-bottom: 10px;
  }
`;

const FounderImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 10px;
  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

const ContactPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-top: 20px;
  width: 70%;
`;
const ContactHead = styled.h1`
  font-size: 2.4rem;
  font-family: verdana;
  font-weight: 500;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const ContactPara = styled.p`
  font-size: 1rem;
  font-family: sans-serif;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const ContactLink = styled(Link)`
  border: none;
  padding: 10px 20px;
  outline: none;
  background: tomato;
  color: white;
  font-size: 1rem;
  font-family: sans-serif;
  border-radius: 5px;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;
const Story = () => {
  return (
    <>
      <StoryContainer
        style={{
          backgroundImage: `url(${BgStory})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Head>
          <HeadH1>From Hikking Trails to Coffee Tales</HeadH1>
          <HeadPara>
            Cafecito was born out of a love for two things: the great outdoors
            and great coffee. Our journey began in 2015 when two friends, Sarah
            and Mike, found themselves at the base of Mountain Trail after an
            invigorating hike, wishing for a warm cup of coffee and a hearty
            meal
          </HeadPara>
        </Head>
        <HeadJour>
          <HeadJH1>Our Journey</HeadJH1>
          <HeadJIn>
            <H3>2015: The Idea</H3>
            <H3P>
              On that fateful day, Sarah turned to Mike and said, "Wouldn't it
              be amazing if there was a cozy coffee shop right here?" That
              simple question sparked the beginning of Cafecito.
            </H3P>
            <H3>2016: Planning and Preparation</H3>
            <H3P>
              For a year, Sarah and Mike worked tirelessly. Sarah, a former
              barista, perfected her craft and sourced the finest beans. Mike,
              with his background in hospitality, scouted the perfect location
              and designed a space to become a haven for coffee lovers
            </H3P>
          </HeadJIn>
        </HeadJour>
        <Values>
          <ValuesHeadH1>Our Values</ValuesHeadH1>
          <Valuespara>
            <strong>Quality:</strong> We never compromise on taste or quality.
          </Valuespara>
          <Valuespara>
            <strong>Community:</strong>We're not just in the community; we're
            part of it.
          </Valuespara>
          <Valuespara>
            <strong>Sustainability:</strong> Every decision we make considers
            its impact.
          </Valuespara>
          <Valuespara>
            <strong>Adventure:</strong> We fuel your journeys through coffee.
          </Valuespara>
        </Values>
        <Founder>
          <FHead>Meet the Founders</FHead>
          <FounderImg src={FImg} />
          <p style={{ textAlign: "center" }}>
            Sarah - Beyond Dreams Collection
          </p>
          <FounderImg src={F2Img} />
          <p style={{ textAlign: "center" }}>Mike Rodriguez</p>
        </Founder>

        <ContactPage>
          <ContactHead>Join Our Story</ContactHead>
          <ContactPara>
            Whether you're a local, a weekend warrior, or a tourist passing
            through, there's a place for you at Cafecito.
          </ContactPara>
          <ContactLink to="/contact">Find Us</ContactLink>
        </ContactPage>
      </StoryContainer>
    </>
  );
};

export default Story;
