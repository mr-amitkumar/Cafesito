import { styled } from "styled-components";
import MenuBG from "../assets/Menu.jpg";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 30rem 0;
    @media (max-width: 768px) {
    height: 100vh;
    padding: 40rem 0;
  } 
`;

const MenuHead = styled.h1`
  font-size: 50px;
  //   background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
  font-family: sans-serif;
    @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const MenuPara = styled.p`
  margin-top: 20px;
  font-size: 20px;
  //   background: rgba(255, 255, 255, 0.5);
  padding: 10px 90px;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
    @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 20px;
  }
`;
const MenuLeft = styled.div`
  background: rgba(255, 255, 255, 0.7);
  height: 650px;
  border-radius: 3px;
  width: 410px;
  color: black;
    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const MenuRight = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  color: black;
  height: 620px;
  width: 430px;
    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const MenuDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 10%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0 5%;
    margin-top: 20px;
  }
`;

const LeftHead = styled.h1`
  text-align: center;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 1px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 20px;
    @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const DivLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid green;
  margin-left: 20px;
`;
const LeftContentHead = styled.h2`
  font-size: 20px;
  font-family: verdana;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 5px;
  }

`;
const LeftContentPara = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  margin-left: 2px;
  text-align: center;
  border-bottom: 0.5px solid lightgrey;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const RightHead = styled.h1`
  text-align: center;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 1px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const DivRightContent = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid green;
  margin-left: 20px;
`;
const RightContentHead = styled.h2`
  font-size: 20px;
  font-family: verdana;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;
const RightContentPara = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  margin-left: 2px;
  text-align: center;
  border-bottom: 0.5px solid lightgrey;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
const Menu = () => {
  return (
    <>
      <MenuContainer
        style={{
          backgroundImage: `url(${MenuBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MenuHead>Our Menu</MenuHead>
        <MenuPara>
          The Chicago Department of Public Health advises that the consumption
          of raw or undercooked foods of animal origin, such as beef, eggs,
          fish, lamb, and pork, poultry or shellfish, may result in an increased
          risk of food borne illness.
        </MenuPara>
        <MenuDiv>
          <MenuLeft>
            <LeftHead>Salads</LeftHead>
            <DivLeftContent>
              <LeftContentHead>Chopped Salad Tray</LeftContentHead>
              <LeftContentPara>
                Half Tray (feeds 10-15) $69.95 | Full Tray (feeds 20-25) $119.95
              </LeftContentPara>
              <LeftContentHead>Arugala Tray</LeftContentHead>
              <LeftContentPara>
                Half Tray (feeds 10-15) $69.95 | Full Tray (feeds 20-25) $119.95
              </LeftContentPara>
              <LeftContentHead>Fresca Tray</LeftContentHead>
              <LeftContentPara>
                Half Tray (feeds 10-15) $69.95 | Full Tray (feeds 20-25) $119.95
              </LeftContentPara>
              <LeftContentHead>Shrimp Ceviche Tray</LeftContentHead>
              <LeftContentPara>
                Half Tray (feeds 10-15) $84.95 | Full Tray (feeds 20-25) $159.95
              </LeftContentPara>
              <LeftContentHead>Exotica Salad Tray</LeftContentHead>
              <LeftContentPara>
                Half Tray (No shrimp, feeds 10-15) $69.95 | Full Tray (Feeds
                20-25) $119.95
              </LeftContentPara>
              <LeftContentHead>Cafe Salads</LeftContentHead>
              <LeftContentPara>
                Half Tray (feeds 10-15) $69.95 | Full Tray (feeds 20-25) $119.95
              </LeftContentPara>
              <LeftContentHead>Mixed Pastry Tray</LeftContentHead>
              <LeftContentPara>
                Half Tray (7-10) $29.95 | Full Tray (feeds 15-20) $59.95
              </LeftContentPara>
            </DivLeftContent>
          </MenuLeft>
          <MenuRight>
            <RightHead>Entrées</RightHead>
            <DivRightContent>
              <RightContentHead>Lechon (Roasted Pork) Tray</RightContentHead>
              <RightContentPara>
                Half Tray (feeds 10-15) $94.95 | Full Tray (feeds 20-25) $199.95
              </RightContentPara>
              <RightContentHead>Steak Chimichurri Tray</RightContentHead>
              <RightContentPara>
                Half Tray (feeds 10-15) $99.95 | Full Tray (feeds 20-25) $209.95
              </RightContentPara>
              <RightContentHead>Chicken Chimichurri Tray</RightContentHead>
              <RightContentPara>
                Half Tray (feeds 10-15) $94.95 | Full Tray (feeds 20-25) $199.95
              </RightContentPara>
              <RightContentHead>Tilapia Criolla Tray</RightContentHead>
              <RightContentPara>
                Half Tray (feeds 10-15) $94.95 | Full Tray (feeds 20-25) $209.95
              </RightContentPara>
              <RightContentHead>Palomilla Tray</RightContentHead>
              <RightContentPara>
                Half Tray (feeds 10-15) $99.95 | Full Tray (feeds 20-25) $209.95
              </RightContentPara>
              <RightContentHead>Ropa Vieja (Roast Beef) Tray</RightContentHead>
              <RightContentPara>
                Half Tray (feeds 10-15) $99.95 | Full Tray (feeds 20-25) $209.95
              </RightContentPara>
            </DivRightContent>
          </MenuRight>
        </MenuDiv>
      </MenuContainer>
    </>
  );
};

export default Menu;
