import React, {useState} from 'react';
import { 
    MenuLabel, 
    Icon,
    NavBackground, 
    List, 
    ItemLink, 
    Navigation, 
    SetThemeContext,
    BoxTextSetTheme,
    BoxCaracterSetTheme,
    IconThemeSun,
    IconThemeMoon
} from './hamburgerMenu.style';

import Grid from '@mui/material/Unstable_Grid2'
import { useAppThemeContext } from '../../shared/contexts';


export default function HamburgerMenu(props: any) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
	const { toggleTheme } = useAppThemeContext();
	const { themeName } = useAppThemeContext();

	return (
		<>
            <MenuLabel htmlFor="navi-toggle" themeName={themeName} clicked={click} onClick={handleClick}>
                <Icon clicked={click}  themeName={themeName}>
                    &nbsp;
                </Icon>
            </MenuLabel>
            <NavBackground themeName={themeName} clicked={click}>&nbsp;</NavBackground>
            <Navigation themeName={themeName} clicked={click}>
                <SetThemeContext onClick={() =>{toggleTheme()}} themeName={themeName}>
                    <BoxTextSetTheme>
                        {'setTheme'}
                        <BoxCaracterSetTheme>
                            {'( '}
                        </BoxCaracterSetTheme>
                    </BoxTextSetTheme>
                    &nbsp;
                    {themeName === 'light'  ?  <IconThemeMoon/> : <IconThemeSun/>}
                    &nbsp;
                    <BoxCaracterSetTheme>
                        {' )'}
                    </BoxCaracterSetTheme>
                </SetThemeContext>

                <List>
                   <li>
                        <ItemLink onClick={handleClick} themeName={themeName} to="/">
                            Home
                            <span style={{color:'purple'}}>{' />'}</span>
                        </ItemLink>
                   </li>
                   <li>
                        <ItemLink onClick={handleClick} themeName={themeName} to="/about">
                            Sobre
                            <span style={{color:'purple'}}>{' />'}</span>
                        </ItemLink>
                   </li>
                   <li>
                        <ItemLink onClick={handleClick} themeName={themeName} to="/portifolio">
                            Portfólio
                            <span style={{color:'purple'}}>{' />'}</span>
                        </ItemLink>
                   </li>
                   <li>
                        <ItemLink onClick={handleClick} themeName={themeName} to="/blog">
                            Blog
                            <span style={{color:'purple'}}>{' />'}</span>
                        </ItemLink>
                   </li>
                   <li>
                        <ItemLink onClick={handleClick} themeName={themeName} to="/contact">
                            Contato
                            <span style={{color:'purple'}}>{' />'}</span>
                        </ItemLink>
                   </li>
                </List>
            </Navigation>
		</>
	);
}