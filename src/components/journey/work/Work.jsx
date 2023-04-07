import {
	JourneyDataContainer,
	JourneyData,
	JourneyCalendar,
	JourneyDivider,
	JourneyRounder,
	JourneyLine
} from '../journey.styles';
import { CalendarIcon } from '../../icons/icons.styles';

const Work = () => {
	return (
		<JourneyDataContainer>
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div>
					<h5>Web Developer</h5>
					<span>@Envision Digital</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2021 - Present </span>
					</JourneyCalendar>
				</div>
				<JourneyDivider>
					<JourneyRounder></JourneyRounder>
					<JourneyLine></JourneyLine>
				</JourneyDivider>
			</JourneyData>
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div></div>
				<JourneyDivider>
					<JourneyRounder></JourneyRounder>
				</JourneyDivider>
				<div>
					<h5>SWE Intern</h5>
					<span>@Omni Strategies Ghana</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>Mar - Aug 2020 </span>
					</JourneyCalendar>
				</div>
			</JourneyData>
		</JourneyDataContainer>
	);
};

export default Work;
