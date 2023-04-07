import { SectionHeading } from '../main/main.styles';

import {
	SkillsSection,
	SkillsWrapper,
	SkillsContainer,
	SkillsText
} from './skills.styles';

import {
	HTMLIconContainer,
	JSIconContainer,
	CSSIconContainer,
	ReactIconContainer,
	ReduxIconContainer,
	SassIconContainer,
	BootstrapIconContainer,
	CppIconContainer,
	PythonIconContainer,
	TSIconContainer,
	FirebaseIconContainer,
	GitIconContainer,
	PhotoshopIconContainer,
	IllustratorIconContainer,
	FigmaIconContainer,
	WordIconContainer,
	ExcelIconContainer,
	PowerpointIconContainer
} from '../icons/icon-container.styles';

import {
	HTMLIcon,
	CSSIcon,
	JSIcon,
	ReactIcon,
	ReduxIcon,
	SassIcon,
	BootstrapIcon,
	CppIcon,
	PythonIcon,
	TSIcon,
	FirebaseIcon,
	GitIcon,
	PhotoshopIcon,
	IllustratorIcon,
	FigmaIcon,
	WordIcon,
	ExcelIcon,
	PowerpointIcon
} from '../icons/icons.styles';

const Skills = () => {
	return (
		<SkillsSection>
			<SectionHeading>
				<h4>My Skills</h4>
			</SectionHeading>
			<SkillsText>
				<p>Here are the technologies and tools I'm proficient in</p>
			</SkillsText>
			<SkillsWrapper
				id='section-skills'
				data-aos='zoom-in'
				data-aos-easing='linear'
				data-aos-duration='500'
			>
				<SkillsContainer>
					<HTMLIconContainer>
						<HTMLIcon />
						<span>HTML</span>
					</HTMLIconContainer>
					<CSSIconContainer>
						<CSSIcon />
						<span>CSS</span>
					</CSSIconContainer>
					<JSIconContainer>
						<JSIcon />
						<span>JavaScript</span>
					</JSIconContainer>
					<ReactIconContainer>
						<ReactIcon />
						<span>React</span>
					</ReactIconContainer>
					<ReduxIconContainer>
						<ReduxIcon />
						<span>Redux</span>
					</ReduxIconContainer>
					<SassIconContainer>
						<SassIcon />
						<span>Sass</span>
					</SassIconContainer>
					<BootstrapIconContainer>
						<BootstrapIcon />
						<span>Bootstrap</span>
					</BootstrapIconContainer>
					<CppIconContainer>
						<CppIcon />
						<span>C++</span>
					</CppIconContainer>
					<PythonIconContainer>
						<PythonIcon />
						<span>Python</span>
					</PythonIconContainer>
					<TSIconContainer>
						<TSIcon />
						<span>TypeScript</span>
					</TSIconContainer>
					<FirebaseIconContainer>
						<FirebaseIcon />
						<span>Firebase</span>
					</FirebaseIconContainer>
					<GitIconContainer>
						<GitIcon />
						<span>Git</span>
					</GitIconContainer>
					<PhotoshopIconContainer>
						<PhotoshopIcon />
						<span>Photoshop</span>
					</PhotoshopIconContainer>
					<IllustratorIconContainer>
						<IllustratorIcon />
						<span>Illustrator</span>
					</IllustratorIconContainer>
					<FigmaIconContainer>
						<FigmaIcon />
						<span>Figma</span>
					</FigmaIconContainer>
					<WordIconContainer>
						<WordIcon />
						<span>Ms Word</span>
					</WordIconContainer>
					<ExcelIconContainer>
						<ExcelIcon />
						<span>Ms Excel</span>
					</ExcelIconContainer>
					<PowerpointIconContainer>
						<PowerpointIcon />
						<span>Powerpoint</span>
					</PowerpointIconContainer>
				</SkillsContainer>
			</SkillsWrapper>
		</SkillsSection>
	);
};

export default Skills;
