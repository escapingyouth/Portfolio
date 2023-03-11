import { SkillsSection, SkillsText } from './skills.styles';
import { SectionHeading } from '../main/main.styles';

const Skills = () => {
	return (
		<SkillsSection>
			<SectionHeading>
				<h1>My Skills</h1>
			</SectionHeading>
			<SkillsText>
				<p>Here are the technologies and tools I'm proficient in</p>
			</SkillsText>
		</SkillsSection>
	);
};

export default Skills;
