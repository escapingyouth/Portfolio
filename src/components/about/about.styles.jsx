import styled from 'styled-components';
import { colors, margins } from '../../_variables';

export const AboutSection = styled.section`
	margin: ${margins.marginLarge} 0;
`;

export const SectionHeading = styled.div`
	margin-bottom: ${margins.marginMedium};
	h1 {
		font-size: 1.5rem;
		color: ${colors.light};
		display: flex;
		align-items: center;

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
`;

export const AboutContainer = styled.div``;

export const AboutText = styled.div`
	p {
		font-size: 0.9rem;
		color: ${colors.lighter};
		width: 50%;
		line-height: 1.6;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		span {
			color: ${colors.primary};
		}
	}
`;
