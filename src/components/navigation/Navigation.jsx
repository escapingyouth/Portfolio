// import Resume from '../../assets/CV.docx';

import { useState } from 'react';

import {
	LogoContainer,
	NavBar,
	NavMenu,
	NavItem,
	NavLink,
	Hamburger,
	HamburgerBar
} from './navigation.styles';

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<NavBar>
			<LogoContainer>HOME</LogoContainer>
			<NavMenu>
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
				{/* <NavItem>
					<NavLink href={Resume} download>
						Resume
					</NavLink>
				</NavItem> */}
			</NavMenu>

			<Hamburger isActive={menuOpen} onClick={toggleMenu}>
				<HamburgerBar />
			</Hamburger>
		</NavBar>
	);
};

export default Navigation;
