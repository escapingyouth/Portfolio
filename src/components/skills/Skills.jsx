import { SectionHeading } from '../main/main.styles';
import { SkillsSection, SkillsContainer, SkillsText } from './skills.styles';

import {
	HTMLIconContainer,
	JSIconContainer,
	CSSIconContainer,
	FigmaIconContainer,
	WordIconContainer
} from '../icons/icon-container.styles';

const Skills = () => {
	return (
		<SkillsSection>
			<SectionHeading>
				<h4>My Skills</h4>
			</SectionHeading>
			<SkillsText>
				<p>Here are the technologies and tools I'm proficient in</p>
			</SkillsText>
			<SkillsContainer>
				<HTMLIconContainer>HTML</HTMLIconContainer>
				<JSIconContainer>Js</JSIconContainer>
				<FigmaIconContainer>Figma</FigmaIconContainer>
				<CSSIconContainer>CSS</CSSIconContainer>
				<WordIconContainer>Word</WordIconContainer>
			</SkillsContainer>
		</SkillsSection>
	);
};

export default Skills;
