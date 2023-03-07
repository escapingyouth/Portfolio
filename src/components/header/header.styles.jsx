import styled from 'styled-components';
import { colors } from '../../_variables';

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
		width: 52%;
		line-height: 1.6;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: max-content;
	}
	span {
		margin-left: 0.5rem;
		font-weight: 500;
	}
`;
