import styled from 'styled-components';
import { margins } from '../../utils/_variables';

export const JourneySection = styled.div`
	margin: ${margins.marginLarge} 0;

	h4 {
		&::before {
			content: '0x03';
		}
	}
`;
