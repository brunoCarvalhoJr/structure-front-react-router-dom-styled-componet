import * as React from 'react';
import  { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';
import Blog from '../../pages/blog/blog';
import Portifolio from '../../pages/portifolio/portifolio';
import { DivRoutes } from './mainContainer.style';
import HamburgerMenu from '../responsive-menu-app-bar/hamburgerMenu';

export default function MainContainer(props: any) {

	return (
		<>
			<Router>
        		<HamburgerMenu />
				<DivRoutes className="pages">
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/about' element={<About/>} />
						<Route path='/portifolio' element={<Portifolio/>} />
						<Route path='/blog' element={<Blog/>} />
						<Route path='/contact' element={<Contact/>} />
					</Routes>
				</DivRoutes>
			</Router>
		</>
	);
}