import styled from 'styled-components';
import { margins, colors } from '../../utils/_variables';
import { GithubIcon } from '../icons/icons.styles';

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

export const PortfolioContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
`;

export const ProjectContainer = styled.article`
	width: 70%;
	border: 1px solid #ffffff28;
	border-radius: 4px;
	overflow: hidden;

	@media screen and (max-width: 64em) {
		width: 80%;
	}

	@media screen and (max-width: 57em) {
		width: 90%;
	}
	@media screen and (max-width: 34em) {
		width: 100%;
	}
`;

export const ProjectImageContainer = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

export const ProjectDetailsContainer = styled.div`
	padding: 2em;

	@media screen and (max-width: 34em) {
		padding: 1em;
	}
	@media screen and (max-width: 18em) {
		padding: 0.7em;
	}
`;

export const ProjectHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 26em) {
		h3 {
			font-size: 1.2rem;
		}
	}
	@media screen and (max-width: 18em) {
		h3 {
			font-size: 1rem;
		}
	}
`;

export const ProjectLinkContainer = styled.div`
	${GithubIcon} {
		color: ${colors.light};
		font-size: 1.5rem;
		margin-right: 0.7rem;

		&:hover {
			color: ${colors.primary};
		}

		@media screen and (max-width: 26em) {
			font-size: 1rem;
		}
		@media screen and (max-width: 18em) {
			margin-right: 0.2rem;
		}
	}
`;

export const ProjectIconsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 1.5rem 0;
	flex-wrap: wrap;
	border-bottom: 1px solid #ffffff28;
	padding-bottom: 1em;

	svg {
		font-size: 0.9rem;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		font-weight: 500;
		padding: 0.3em 0.5em;
		border-radius: 2px;

		span {
			font-size: 0.7rem;
		}
	}

	@media screen and (max-width: 34em) {
		gap: 0.5rem;
	}
	@media screen and (max-width: 26em) {
		margin: 1.2rem 0;
		padding-bottom: 0.5em;
		svg {
			font-size: 0.9rem;
		}
		div {
			padding: 0.3em;
		}
	}
	@media screen and (max-width: 18em) {
		gap: 0.2rem;
		padding-bottom: 0.5em;

		svg {
			font-size: 0.8rem;
		}

		div {
			padding: 0.25em;

			span {
				font-size: 0.6rem;
			}
		}
	}
`;

export const ProjectDescription = styled.div`
	p {
		color: ${colors.lighter};
		font-size: 0.9rem;
		text-align: justify;
		line-height: 1.6;
	}
	@media screen and (max-width: 26em) {
		p {
			font-size: 0.8rem;
			line-height: 1.3;
		}
	}
	@media screen and (max-width: 18em) {
		p {
			font-size: 0.6rem;
		}
	}
`;
