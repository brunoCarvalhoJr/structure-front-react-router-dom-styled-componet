/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme } from '@mui/material';
import { green, grey } from '@mui/material/colors';

export const LightTheme = createTheme({
	palette: {
		primary:{
			main: green[700],
			dark: green[800],
			light: green[500],
			contrastText: '#ffffff',
		},
		secondary:{
			main: grey[700],
			dark: grey[800],
			light: grey[500],
			contrastText: '#ffffff'
		},
		background:{
			paper: 'white',
			default: 'white',
		},
	},
	typography:{
		/*fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		  ].join(','),*/
		/*h6:{
			color: green[800],
			fontWeight: 700
		},*/
	},
	components: {
		/*MuiContainer:{
			styleOverrides:{
				root:{
					color: 'white',
					padding: '0px',
					maxWidth: '5000px'
				}
			}
		},*/
		/*MuiListItemButton:{
			styleOverrides:{
				root:{
					fontWeight: 300,
					color: grey[600],
					'&.Mui-selected': {
						background: green[300],
						color: 'black',
						'&:hover': {
							background: green[400],
							color: 'black',
						},
					  },
					'&:focus': {
						background: green[300],
						color: 'black',
					},
					'&:hover': {
						background: green[400],
						color: 'black',
					},
				}
			}
		},*/
	}
});