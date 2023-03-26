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
			<JourneyData>
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
			<JourneyData>
				<div></div>
				<JourneyDivider>
					<JourneyRounder></JourneyRounder>
				</JourneyDivider>
				<div>
					<h5>Software Engineering Intern</h5>
					<span>@Omni Strategies Ghana</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>March 2020 - August 2020 </span>
					</JourneyCalendar>
				</div>
			</JourneyData>
		</JourneyDataContainer>
	);
};

export default Work;
