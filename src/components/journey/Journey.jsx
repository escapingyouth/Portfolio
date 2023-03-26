import { useState } from 'react';

import { SectionHeading } from '../main/main.styles';
import { JourneySection } from './journey.styles';
import { EducationIcon, WorkIcon } from '../icons/icons.styles';
import {
	JourneyContainer,
	JourneyHeader,
	JourneyTabContainer,
	JourneyTabs,
	JourneyTab,
	TabBar
} from './journey.styles';

import Work from './work/Work';
import Education from './education/Education';

const Journey = () => {
	const [currentComponent, setCurrentComponent] = useState('Education');
	const [activeTab, setActiveTab] = useState(0);

	const handleClick = (component, index) => {
		setCurrentComponent(component);
		setActiveTab(index);
	};

	let component;

	switch (currentComponent) {
		case 'Education':
			component = <Education handleClick={handleClick} />;
			break;
		case 'Work':
			component = <Work />;
			break;

		default:
			component = null;
	}

	return (
		<JourneySection id='section-journey'>
			<SectionHeading>
				<h4>My Journey</h4>
			</SectionHeading>
			<JourneyHeader>
				<JourneyTabContainer>
					<JourneyTabs>
						<JourneyTab onClick={() => handleClick('Education', 0)}>
							<EducationIcon />
						</JourneyTab>
						<JourneyTab onClick={() => handleClick('Work', 1)}>
							<WorkIcon />
						</JourneyTab>
					</JourneyTabs>
					<TabBar activeTab={activeTab} />
				</JourneyTabContainer>
			</JourneyHeader>
			<JourneyContainer>{component}</JourneyContainer>
		</JourneySection>
	);
};

export default Journey;
