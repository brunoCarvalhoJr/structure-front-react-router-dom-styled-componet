import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { LightTheme, DarkTheme } from '../themes';
import { BoxMain } from './themeContext.style';

interface IThemeContextData {
	themeName: 'light' | 'dark';
	toggleTheme: () => void;
}

type ThemeProviderProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
  };

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
	return useContext(ThemeContext);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppThemeProvider: any = (props: ThemeProviderProps) => {

	const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

	const toggleTheme = useCallback(() => {
		setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
	},[]);

	const theme = useMemo(() => {
		if(themeName === 'light') return LightTheme;
		
		return DarkTheme;
	},[themeName]);

	return (
		<ThemeContext.Provider  value={{themeName, toggleTheme}}>   
			<ThemeProvider theme={theme} >
				<BoxMain 
					themeName={themeName}
					width="100vw" 
					height="100vh"
				>
					{ props.children }
				</BoxMain>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};