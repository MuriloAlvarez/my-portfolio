import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/profilePortfolio.jpg"
import DownloadingIcon from '@mui/icons-material/Downloading';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Hero = () => {
  
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  })) 

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  })) 

    return (
      <>
      <StyledHero>
        <Container maxWidth= "lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <StyledImg src={Avatar}/>
            </Grid>

            <Grid item xs={12} md={8}>  
              <Typography color="secondary" textAlign= "center" variant="h1">Murilo Alvarez</Typography>
              <Typography color="secondary" textAlign= "center" variant="h2">UX/UI Design</Typography>
              
              <Grid container display= "flex" justifyContent= "center">
                <Grid item xs={12} md={4} display= "flex" justifyContent= "center">
                  <Button>
                    <DownloadingIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display= "flex" justifyContent= "center">
                  <Button>
                    <ForwardToInboxIcon />
                    Entrar em contato
                  </Button>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
      </>
      
    )
  }
  
  export default Hero