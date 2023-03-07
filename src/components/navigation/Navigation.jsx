// import Resume from '../../assets/CV.docx';
import { ButtonTypeClasses } from '../button/Button';

import { useState } from 'react';

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
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Header>
			<NavBar>
				<LogoContainer>LOGO</LogoContainer>
				<NavMenu isActive={menuOpen}>
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

				<Hamburger isActive={menuOpen} onClick={toggleMenu}>
					<HamburgerBar />
				</Hamburger>
			</NavBar>
		</Header>
	);
};

export default Navigation;
