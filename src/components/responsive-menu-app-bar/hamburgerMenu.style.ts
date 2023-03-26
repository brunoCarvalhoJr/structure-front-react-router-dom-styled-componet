
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

let COLORS = {
    primaryDark: "black",
    primaryLight: "#414345",
}

export const MenuLabel = styled.label`

    ${(props: any) => props.themeName === 'light' ? 
    COLORS = {
        primaryDark:  "#414345",
        primaryLight: "black",
    } : 
    COLORS = {
        primaryDark:  "black",
        primaryLight: "#414345",
    }}

    background-color:  ${(props: any) => props.clicked ? COLORS.primaryLight : COLORS.primaryDark};
    transition: background-color 0.8s;
    position: fixed;
    top: 2rem;
    right: 3rem;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 0.1rem 2rem ${(props: any) => props.themeName === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(120, 120, 120, 0.5)'};
    text-align: center;
`;

export const NavBackground  = styled.div`

    ${(props: any) => props.themeName === 'light' ? 
    COLORS = {
        primaryDark:  "#414345",
        primaryLight: "white",
    } : 
    COLORS = {
        primaryDark:  "black",
        primaryLight: "#414345",
    }}

    position: fixed;
    top: 0.1rem;
    right: 0.8rem;
    background: ${(props: any) => props.themeName === 'light' ? "radial-gradient("+COLORS.primaryLight+","+COLORS.primaryDark+")" :  "radial-gradient("+COLORS.primaryDark+","+COLORS.primaryLight+")"};
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    z-index: 600;

    transform: ${(props: any) => props.clicked ? "scale(80)" : "scale(0)"};
    transition: transform 0.8s;
`;

export const Icon = styled.span`
    position: relative;
    background-color: ${(props: any) => props.clicked ? "transparent" : (props.themeName === 'light' ? 'white' :  "white") };
    width: 1.5rem;
    height: 1px;
    display: inline-block;
    margin-top: 1.5rem;
    transition: all 0.3s;

    &::before, 
    &::after {
        content:"";
        background-color: white;
        width: 1.5rem;
        height: 1px;
        display: inline-block;

        position: absolute;
        left: 0;
        transition: all 0.3s
    }

    &::before{
        top: ${(props: any) => (props.clicked ? "0" : "-0.5rem") };
        transform: ${(props: any) => (props.clicked ? "rotate(135deg)" : "rotate(0)") };
    }

    &::after{
        top: ${(props: any) => (props.clicked ? "0" : "0.5rem") };
        transform: ${(props: any) => (props.clicked ? "rotate(-135deg)" : "rotate(0)") };
    }
    
    ${MenuLabel}:hover &::before {
        top: ${(props: any) => (props.clicked ? "0" : "0") };
    }
    
    ${MenuLabel}:hover &::after {
        top: ${(props: any) => (props.clicked ? "0" : "0") };
    }
`;

export const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top:0;
    right: 0;
    z-index: 600;
    width: ${(props: any) => props.clicked ? "100%" : "0"};
    opacity: ${(props: any) => props.clicked ? "1" : "0"};

    transition: width 0.8s, opacity 0.4s;
`;

export const List = styled.ul`
    position: absolute;
    list-style: none;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
`;

export const ItemLink = styled(NavLink)`

    ${(props: any) => props.themeName === 'light' ? 
    COLORS = {
        primaryDark:  "#414345",
        primaryLight: "white",
    } : 
    COLORS = {
        primaryDark:  "black",
        primaryLight: "#414345",
    }}

    display: inline-block;
    font-size: 3rem;
    font-weight: 400;
    text-decoration: none;
    color: ${(props: any) => (props.themeName === 'light' ? 'black' :  "white") };
    padding: 1rem 2rem;

    background-image: ${(props: any) => "linear-gradient("+
        "120deg,"+
        "transparent 0%,"+
        "transparent 50%,"+
        ((props.themeName === 'light') ? "#414345" :  "#fff") + " 50%"}
    );
    background-size: 240%;
    transition: all 0.7s;

    &:hover, 
    &:active{
        background-position: 100%;
        color: ${(props: any) => (props.themeName === 'light' ? COLORS.primaryLight :  COLORS.primaryLight) };
        transform: translateX(1rem);
    }
`

export const SetThemeContext  = styled.div`
    margin-top: 2rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    display: inline-flex;
    cursor: pointer;
`;

export const BoxTextSetTheme  = styled.span`
    color: green;
`;

export const BoxCaracterSetTheme  = styled.span`
    color: purple;
    font-weight: 900;
`;

export const IconThemeSun = styled(WbSunnyIcon)`
    color: white;
    font-size: 1.5rem;
    width: 30px !important;
    height: 30px !important;
    margin-top: 0.1rem;

    &:hover, 
    &:active{
        font-size: 1.7rem;
        margin-top: -0.1rem;
        width: 40px !important;
        height: 40px !important;
    }
`;

export const IconThemeMoon = styled(NightsStayIcon)`
    color: black;
    font-size: 1.5rem;
    width: 30px !important;
    height: 30px !important;
    margin-top: 0.1rem;

    &:hover, 
    &:active{
        font-size: 1.7rem;
        margin-top: -0.1rem;
        width: 40px !important;
        height: 40px !important;
    }
`;