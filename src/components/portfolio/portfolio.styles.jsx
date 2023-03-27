import styled from 'styled-components';
import { margins } from '../../utils/_variables';

export const PortfolioSection = styled.section`
	margin: ${margins.marginLarge} 0;

	h4 {
		&::before {
			content: '0x04';
		}
	}
`;

export const PortoflioText = styled.div`
	p {
		text-align: center;
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 26em) {
		p {
			font-size: 0.8rem;
		}
	}
`;
