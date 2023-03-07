import styled, { css } from 'styled-components';
import { colors } from '../../_variables';

export const Header = styled.header`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	padding: 1.5em 2em;
	border-bottom: 0.5px solid #1e2029;
	background-color: ${colors.background};
	backdrop-filter: blur(10px);
`;
export const LogoContainer = styled.a`
	color: ${colors.light};
`;

export const Hamburger = styled.div`
	position: relative;
	width: 3rem;
	height: 3rem;
	display: none;
	cursor: pointer;

	@media only screen and (max-width: 50em) {
		display: flex;
		justify-content: center;
		align-items: center;

		${({ isActive }) => isActive && HamburgerActive}
	} ;
`;

export const HamburgerBar = styled.span`
	&,
	&::before,
	&::after {
		position: absolute;
		display: block;
		background-color: ${colors.primary};
		width: 2rem;
		height: 0.13rem;
		border-radius: 4px;
	}

	&::before,
	&::after {
		content: '';
		transition: all 0.2s;
	}
	&::before {
		top: 0.6rem;
	}
	&::after {
		top: -0.6rem;
	}
`;

const HamburgerActive = css`
	${HamburgerBar} {
		background-color: transparent;

		&::before {
			transform: rotate(135deg);
			top: 0;
		}
		&::after {
			transform: rotate(-135deg);
			top: 0;
		}
	}
`;

export const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 3rem;

	@media only screen and (max-width: 50em) {
		position: fixed;
		top: 0;
		right: -100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		transition: 0.2s ease-in;
		height: 100vh;
		width: min(75vw, 25rem);
		background-color: ${colors.secondary};

		/* box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.25); */
		${({ isActive }) => isActive && NavMenuActive}
	} ;
`;
const NavMenuActive = css`
	right: 0;
`;
export const NavItem = styled.li`
	cursor: pointer;
`;

export const NavLink = styled.a`
	text-transform: capitalize;
	font-size: 0.9rem;
	color: ${colors.light};

	&:hover,
	&:active,
	&:focus {
		color: ${colors.primary};
	}
`;
