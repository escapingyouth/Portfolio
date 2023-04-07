import {
	JourneyDataContainer,
	JourneyData,
	JourneyCalendar,
	JourneyDivider,
	JourneyRounder,
	JourneyLine
} from '../journey.styles';
import { CalendarIcon } from '../../icons/icons.styles';

const Education = () => {
	return (
		<JourneyDataContainer>
			<JourneyData
				data-aos='fade-up'
				data-aos-easing='linear'
				data-aos-duration='300'
			>
				<div>
					<h5>Computer Engineering</h5>
					<span>@KNUST</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2021 - 2024 </span>
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
					<h5>General Science</h5>
					<span>@Akosombo International School</span>
					<JourneyCalendar>
						<CalendarIcon />
						<span>2017 - 2020</span>
					</JourneyCalendar>
				</div>
			</JourneyData>
		</JourneyDataContainer>
	);
};

export default Education;
