import styled, { css } from 'styled-components';
import { colors } from '../../_variables';

export const LogoContainer = styled.a`
	color: ${colors.light};
`;

export const Hamburger = styled.div`
	position: relative;
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	${({ isActive }) => isActive && HamburgerActive};
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
	font-family: 'Space Mono', monospace;
	background-color: ${colors.secondary};
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2em 3em;
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
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
