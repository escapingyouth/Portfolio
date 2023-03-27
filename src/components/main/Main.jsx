import { useContext } from 'react';
import { NavMenuContext } from '../../context/NavMenuContext';

import { MainContainer } from './main.styles';

import Header from '../header/Header';
import About from '../about/About';
import Skills from '../skills/Skills';
import Journey from '../journey/Journey';
import Portfolio from '../portfolio/Portfolio';

const Main = () => {
	const { isNavOpen } = useContext(NavMenuContext);
	return (
		<MainContainer isNavOpen={isNavOpen}>
			<Header />
			<About />
			<Skills />
			<Journey />
			<Portfolio />
		</MainContainer>
	);
};

export default Main;
