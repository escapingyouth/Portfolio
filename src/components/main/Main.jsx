import { useContext } from 'react';
import { NavMenuContext } from '../../context/NavMenuContext';

import Header from '../header/Header';
import About from '../about/About';
import Skills from '../skills/Skills';

import { MainContainer } from './main.styles';

const Main = () => {
	const { isNavOpen } = useContext(NavMenuContext);
	return (
		<MainContainer isNavOpen={isNavOpen}>
			<Header />
			<About />
			<Skills />
		</MainContainer>
	);
};

export default Main;
