import styled from 'styled-components';
import { colors, margins } from '../../utils/_variables';

export const SkillsSection = styled.section`
	margin: ${margins.marginLarge} 0;

	h1 {
		&::before {
			content: '0x02';
		}
	}
`;

export const SkillsText = styled.div`
	p {
		text-align: center;
	}
`;

export const SkillsContainer = styled.div``;
