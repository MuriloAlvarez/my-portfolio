import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
}
const StyledButton: React.FC<StyledButtonProps> = ({children}) => {


    const StyleButton = styled("button")(({theme}) => ({
       backgroundColor: "transparent",
       border: `1px solid ${theme.palette.primary.contrastText}`,
       borderRadius: "6px",
       padding: "8px 20px",
       color: `${theme.palette.primary.contrastText}`,
       width: "100%",
       display: "inline-flex",
       justifyContent: "center",
       alignItems: "center",
       gap: "10px",
       '&:hover':{
        backgroundColor: `${theme.palette.secondary.light}`,
        border: `${theme.palette.primary.main}`
       }

      })) 

  return (
    < >
<StyleButton>
{children}
</StyleButton>
    </>
  )
}

export default StyledButton
