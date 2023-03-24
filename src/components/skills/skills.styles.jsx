import styled from 'styled-components';
import { margins } from '../../utils/_variables';

export const SkillsSection = styled.section`
	margin: ${margins.marginLarge} 0;

	h4 {
		&::before {
			content: '0x02';
		}
	}
`;

export const SkillsText = styled.div`
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

export const SkillsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	gap: 1.8rem 1.8rem;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 57em) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}

	@media screen and (max-width: 48em) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	@media screen and (max-width: 34em) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media screen and (max-width: 26em) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		row-gap: 1.2rem;
	}

	@media screen and (max-width: 18em) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		row-gap: 1.2rem;
		column-gap: 0.8rem;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-weight: 500;
		padding: 0.3em;
		border-radius: 3px;

		span {
			font-size: 0.8rem;
		}

		@media screen and (max-width: 26em) {
			padding: 0.5em;
		}
	}
`;
