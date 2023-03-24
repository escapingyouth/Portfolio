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
`;

export const SkillsContainer = styled.div`
	div {
		display: inline-block;
		font-weight: 500;
		padding: 0.5em 1em;
		border-radius: 4px;
		margin-right: 10px;
	}
`;
