import { Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/profilePortfolio.jpg";
import DownloadingIcon from "@mui/icons-material/Downloading";
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
              <Typography color="primary.contrastText" variant="h1" sx={{
                  fontSize: {
                    xs: "50px",

                    lg: "80px",
                  },
                }}>
                Murilo Alvarez
              </Typography>
              <Typography color="primary.contrastText" variant="h3">
                UX/UI Design
              </Typography>
              <Typography color="primary.contrastText" variant="h3">
                Front-End Developer
              </Typography>

              <ButtonContainer>
                <StyledButton>
                  <DownloadingIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
                <StyledButton>
                  <ForwardToInboxIcon />
                  <Typography>Entrar em contato</Typography>
                </StyledButton>
              </ButtonContainer>
            </TextSection>
          </ContentWrapper>
        </Container>
      </StyledHero>
      <div>oi</div>
    </>
  );
}
const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
}));

const ContentWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1200px",
  padding: "0 16px",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "10px",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  maxWidth: "400px",
  borderRadius: "50%",
}));

const TextSection = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  textAlign: "center",
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginTop: "40px",
  width: "500px",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "10px",
  },
}));
