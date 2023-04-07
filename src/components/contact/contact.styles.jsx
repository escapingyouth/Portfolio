import styled from 'styled-components';
import { colors, margins } from '../../utils/_variables';

export const ContactSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;

	margin: ${margins.marginLarge} 0;

	h4 {
		font-family: 'Space Mono', monospace;
		color: ${colors.primary};

		&::before {
			content: '0x05';
		}
		&::after {
			display: none;
		}
	}

	a {
		font-family: 'Space Mono', monospace;
		font-size: 1.2rem;
		border-radius: 0px;
	}

	@media only screen and (max-width: 18em) {
		a {
			font-size: 0.9rem;
		}
	}
`;

export const ContactText = styled.div`
	margin-bottom: 2rem;

	h3 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	p {
		span {
			color: ${colors.primary};
		}
		&:nth-of-type(1) {
			margin-bottom: 0.5rem;
		}
	}

	@media only screen and (max-width: 26em) {
		p {
			font-size: 0.8rem;
		}
	}

	@media only screen and (max-width: 18em) {
		h3 {
			font-size: 1.9rem;
		}
		p {
			font-size: 0.7rem;
		}
	}
`;
