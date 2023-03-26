import styled, { css } from 'styled-components';
import { colors, margins } from '../../utils/_variables';

export const JourneySection = styled.div`
	margin: ${margins.marginLarge} 0;

	h4 {
		&::before {
			content: '0x03';
		}
	}
`;

export const JourneyHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const JourneyTabContainer = styled.div`
	width: 50%;
	margin-bottom: ${margins.marginMedium};
`;

export const JourneyTabs = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const JourneyTab = styled.div``;

export const TabBar = styled.div`
	width: 100%;
	margin-top: 2rem;
	height: 0.2rem;
	background-color: #233554;

	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 50%;
		height: 0.2rem;
		background-color: ${colors.primary};
	}

	${({ activeTab }) =>
		activeTab
			? css`
					&::after {
						right: 0;
					}
			  `
			: css`
					&::after {
						left: 0;
					}
			  `};
`;

export const JourneyContainer = styled.div`
	display: grid;
	grid-template-columns: 0.7fr;
	justify-content: center;

	margin-top: ${margins.marginMedium};
`;

export const JourneyDataContainer = styled.div`
	display: block;
`;

export const JourneyData = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content 1fr;
	column-gap: 1.5rem;
	h5 {
		font-weight: bold;
		font-size: 1.7rem;
		margin-bottom: 0.5rem;
	}
	span {
		font-weight: 500;
		font-size: 1.2rem;
		color: ${colors.primary};
	}
`;

export const JourneyCalendar = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
	margin-top: 1rem;

	span {
		font-family: 'Space Mono', monospace;
		font-size: 1rem;
		color: ${colors.lighter};
	}
`;

export const JourneyDivider = styled.div``;

export const JourneyRounder = styled.div`
	display: inline-block;
	width: 13px;
	height: 13px;
	background-color: ${colors.primary};
	border-radius: 50%;
`;
export const JourneyLine = styled.div`
	display: block;
	width: 1px;
	height: 100%;
	z-index: -1;
	position: relative;
	background-color: #233554;
	transform: translate(6px, -7px);
`;
