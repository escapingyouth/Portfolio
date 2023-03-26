import styled, { css } from 'styled-components';

import { colors, margins } from '../../utils/_variables';

export const MainContainer = styled.main`
	margin: 10rem;

	@media screen and (max-width: 64em) {
		margin: 10rem 6rem;
	}
	@media screen and (max-width: 50em) {
		${({ isNavOpen }) => isNavOpen && MainContainerActive};
	}

	@media screen and (max-width: 48em) {
		margin: 10rem ${margins.marginMedium};
	}

	@media screen and (max-width: 26em) {
		margin: 10rem 2rem;
	}

	@media screen and (max-width: 23em) {
		margin: 10rem 1.5rem;
	}
`;

const MainContainerActive = css`
	filter: blur(5px) brightness(0.7);
	transition: all 0.2s ease-in;
	pointer-events: none;
	user-select: none;
`;

export const SectionHeading = styled.div`
	margin-bottom: ${margins.marginMedium};
	h4 {
		font-size: 1.5rem;
		color: ${colors.light};
		display: flex;
		align-items: center;
		text-transform: capitalize;

		&::before {
			content: '0x01';
			font-family: 'Space Mono', monospace;
			color: ${colors.primary};
			font-weight: 400;
			font-size: 1.5rem;
			margin-right: 1rem;
		}

		&::after {
			content: '';
			position: relative;
			display: block;
			width: 30%;
			height: 0.5px;
			background-color: #233554;
			margin-left: 2rem;
		}
	}

	@media screen and (max-width: 48em) {
		h4 {
			&::after {
				width: 65%;
				margin-left: 1rem;
			}
		}
	}
	@media screen and (max-width: 34em) {
		h4 {
			&::after {
				width: 45%;
			}
		}
	}
	@media screen and (max-width: 26em) {
		h4 {
			&,
			&::before {
				font-size: 1.2rem;
			}
		}
	}
	@media screen and (max-width: 25em) {
		h4 {
			&,
			&::before {
				font-size: 1.1rem;
			}

			&::after {
				width: 30%;
			}
		}
	}
	@media screen and (max-width: 18em) {
		h4 {
			&::after {
				display: none;
			}
		}
	}
`;
