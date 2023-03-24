import styled from 'styled-components';
import { colors, margins } from '../../utils/_variables';

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
		line-height: 1.6;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		span {
			color: ${colors.primary};
		}
	}

	@media screen and (max-width: 64em) {
	}
`;

export const Wrapper = styled.div`
	@media screen and (max-width: 48em) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 3rem;
	}
`;

export const AboutImageContainer = styled.div`
	max-width: 18.75rem;
	height: 16rem;
	position: relative;
	z-index: 10;
	border: 0.5px solid ${colors.secondary};

	@media screen and (max-width: 26em) {
		max-width: 16rem;
		height: 15rem;
	}
	@media screen and (max-width: 24em) {
		max-width: 15rem;
		height: 14rem;
	}
	@media screen and (max-width: 18em) {
		max-width: 11rem;
		height: 10rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border-radius: 4px;
	}

	&::after {
		content: '';
		position: absolute;
		top: 15px;
		z-index: -1;
		left: 15px;
		width: 100%;
		height: 100%;
		background-color: transparent;
		border: 2px solid ${colors.primary};
		border-radius: 4px;
		backface-visibility: hidden;
		transition: all 0.2s ease;
	}

	&:hover::after {
		top: 10px;
		left: 10px;
	}
`;
