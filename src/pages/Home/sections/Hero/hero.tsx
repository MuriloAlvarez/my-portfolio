import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/profilePortfolio.jpg";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import StyledButton from "../../../../components/styledButton/styledButton";

export default function Hero() {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <ContentWrapper>
            <StyledImg src={Avatar} alt="Murilo Alvarez" />
            <TextSection>
              <span className="subtitle">Hi</span>
              <span className="title">I'am Murilo Alvarez</span>
              <span className="subtitle">Front-End Developer</span>

              <ButtonContainer>
                <StyledButton>
                  <ForwardToInboxIcon />
                  <span>Entrar em contato</span>
                </StyledButton>
              </ButtonContainer>
            </TextSection>
          </ContentWrapper>
        </Container>
      </StyledHero>
      <SecondStep>
        <Typography color="primary.contrastText" variant="h4">
          Stacks
        </Typography>
      </SecondStep>
    </>
  );
}
const StyledHero = styled.div`
   background-color: #292929;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
  `;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%; 
  padding: 0 20px; 

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; 
  word-wrap: break-word; 
  max-width: 600px;

  span {
    color: #ffffff;
    font-weight: 500;
    line-height: 1.2;
    font-size: 12px;
  }

  .title {
    font-size: 80px;
    font-weight: 500;
  }
  
  .subtitle {
    font-size: 40px;
  }
  
  .count {
    font-size: 40px;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  width: 500px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SecondStep = styled.div`
  background-color: #292929;
  height: 100vh;
  display: flex;
`;
