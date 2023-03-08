import styled from 'styled-components';
import { colors } from '../../_variables';

export const BaseButton = styled.a`
	background-color: transparent;
	border: 1px solid ${colors.primary};
	border-radius: 4px;
	color: ${colors.primary};
	font-size: 0.9rem;
	padding: 0.7em 1.8em;
	cursor: pointer;

	&:hover,
	&:active {
		background-color: ${colors.tertiary};
	}
`;
export const InvertedButton = styled.a`
	background-color: ${colors.tertiary};
	border-radius: 4px;
	color: #fff;
	font-size: 0.9rem;
	padding: 0.5em 0.8em;
	cursor: pointer;

	&:hover,
	&:active {
		background-color: #1e2a40;
	}

	@media only screen and (max-width: 18em) {
		padding: 0.3em 0.6em;
	}
`;
