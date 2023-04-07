import styled from 'styled-components';
import { colors } from '../../utils/_variables';

export const FooterText = styled.div`
	font-family: 'Space Mono', monospace;
	text-align: center;
	margin-bottom: 2rem;

	p {
		span {
			color: ${colors.primary};
		}
	}

	@media only screen and (max-width: 34em) {
		p {
			font-size: 0.9rem;
		}
	}

	@media only screen and (max-width: 34em) {
		p {
			font-size: 0.8rem;
		}
	}

	@media only screen and (max-width: 18em) {
		p {
			font-size: 0.7rem;
		}
	}
`;
