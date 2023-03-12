import styled from 'styled-components';
import { colors, margins } from '../../utils/_variables';

import aboutImage from '../../assets/about.jpg';

export const AboutSection = styled.section`
	margin: ${margins.marginLarge} 0;
`;

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 3rem;

	@media screen and (max-width: 48em) {
		display: block;
	}
`;

export const AboutText = styled.div`
	p {
		font-size: 0.9rem;
		color: ${colors.lighter};
		width: 90%;
		line-height: 1.6;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		span {
			color: ${colors.primary};
		}
	}

	@media screen and (max-width: 64em) {
		p {
			width: 100%;
		}
	}
`;

export const WrapperContainer = styled.div`
	@media screen and (max-width: 48em) {
		margin: 3rem auto;
		width: 45%;
		height: 17rem;
	}

	@media screen and (max-width: 34em) {
		width: 65%;
		height: 15rem;
	}

	@media screen and (max-width: 26em) {
		width: 70%;
		height: 13rem;
	}

	@media screen and (max-width: 20em) {
		width: 70%;
		height: 10rem;
	}
`;

export const AboutImageContainer = styled.div`
	width: 60%;
	height: 100%;
	z-index: 1000;
	background: url(${aboutImage}) bottom/cover no-repeat, rgba(0, 180, 216, 0.85);
	background-blend-mode: multiply;
	border-radius: 5px;
	border: 0.5px solid ${colors.secondary};

	&::after {
		content: '';
		position: absolute;
		top: 15px;
		z-index: -1;
		left: 15px;
		width: 60%;
		height: 100%;
		background-color: transparent;
		border: 2px solid ${colors.primary};
		border-radius: 5px;
		backface-visibility: hidden;
		transition: all 0.2s ease;
	}

	&:hover::after {
		top: 10px;
		left: 10px;
	}

	&:hover {
		background: url(${aboutImage}) bottom/cover no-repeat;
	}

	@media screen and (max-width: 64em) {
		&,
		&::after {
			width: 90%;
			height: 90%;
		}
	}

	@media screen and (max-width: 57em) {
		&,
		&::after {
			width: 100%;
		}
	}

	@media screen and (max-width: 52em) {
		&,
		&::after {
			height: 50%;
		}
	}

	@media screen and (max-width: 48em) {
		&,
		&::after {
			width: 100%;
			height: 100%;
		}
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;
