// import Resume from '../../assets/CV.docx';
import { ButtonTypeClasses } from '../button/Button';

import { useState, useEffect } from 'react';

import {
	Header,
	LogoContainer,
	NavBar,
	NavMenu,
	NavItem,
	NavLink,
	Hamburger,
	HamburgerBar
} from './navigation.styles';

import Button from '../button/Button';

const Navigation = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible]);

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Header visible={visible}>
			<NavBar>
				<LogoContainer>LOGO</LogoContainer>
				<NavMenu menuOpen={menuOpen}>
					<NavItem>
						<NavLink>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Skills</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Experience</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Portfolio</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Contact</NavLink>
					</NavItem>

					<Button
						buttonType={ButtonTypeClasses.base}
						href={`${process.env.PUBLIC_URL}/resume.pdf`}
						target='_blank'
						rel='noopener noreferrer'
						download
					>
						Resume
					</Button>
				</NavMenu>

				<Hamburger menuOpen={menuOpen} onClick={toggleMenu}>
					<HamburgerBar />
				</Hamburger>
			</NavBar>
		</Header>
	);
};

export default Navigation;
