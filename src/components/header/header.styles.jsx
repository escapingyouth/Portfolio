import styled from 'styled-components';
import { colors } from '../../utils/_variables';

export const MainHeader = styled.header``;

export const TextContainer = styled.div`
	margin-bottom: 3rem;

	h1 {
		font-family: 'Space Mono', monospace;
		color: ${colors.primary};
		font-weight: 400;
		font-size: 1rem;
		margin-bottom: 1.2rem;
	}

	h2 {
		font-size: 5rem;
		color: ${colors.light};
		margin-bottom: 0.4rem;
		line-height: 1.1;
		font-weight: 700;
	}

	h3 {
		font-size: 4rem;
		color: #8892b0;
		line-height: 0.9;
		margin-bottom: 1.5rem;
	}

	p {
		color: ${colors.lighter};
		width: 45%;
		line-height: 1.6;

		span {
			color: ${colors.primary};
		}
	}

	@media screen and (max-width: 64em) {
		h3 {
			font-size: 3rem;
		}
		p {
			width: 70%;
		}
	}
	@media screen and (max-width: 52em) {
		h2 {
			font-size: 3.8rem;
		}
		h3 {
			font-size: 2.8rem;
		}
		p {
			width: 80%;
		}
	}
	@media screen and (max-width: 48em) {
		h2 {
			font-size: 3.8rem;
		}
		h3 {
			font-size: 2.6rem;
		}
		p {
			width: 89%;
		}
	}
	@media screen and (max-width: 34em) {
		h2 {
			font-size: 2.8rem;
		}
		h3 {
			font-size: 1.8rem;
		}
		p {
			width: 100%;
		}
	}
	@media screen and (max-width: 26em) {
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.8rem;
		}
		p {
			font-size: 0.9rem;
		}
	}
	@media only screen and (max-width: 18em) {
		h1 {
			font-size: 0.9rem;
		}
		h2 {
			font-size: 1.8rem;
		}
		h3 {
			font-size: 1.2rem;
		}
		p {
			font-size: 0.7rem;
		}
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
	}

	span {
		margin-left: 0.5rem;
		font-weight: 500;

		@media only screen and (max-width: 18em) {
			font-size: 0.6rem;
		}
	}

	@media screen and (max-width: 23em) {
		gap: 0;
		justify-content: space-between;
	}
`;
