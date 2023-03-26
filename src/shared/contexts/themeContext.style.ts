import styled from 'styled-components';
import { Box } from '@mui/material';

let COLORS = {
  primaryDark: "black",
  primaryLight: "#414345",
}

export const BoxMain = styled(Box)`
  ${(props: any) => props.themeName === 'light' ? 
      COLORS = {
          primaryDark:  "#414345",
          primaryLight: "white",
      } : 
      COLORS = {
          primaryDark:  "black",
          primaryLight: "white",
      }}

    font-size: 62.5%;
    font-family: Roboto; 
    width: auto; 
    height: 100vh;
    color: ${(props: any) => props.themeName == "light" ? COLORS.primaryDark : COLORS.primaryLight}; ;
    background:  ${(props: any) => props.themeName == "light" ? COLORS.primaryLight : COLORS.primaryDark}; 
  }
`;
