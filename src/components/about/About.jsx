import {
	AboutSection,
	SectionHeading,
	AboutContainer,
	AboutText
} from './about.styles';

const About = () => {
	return (
		<AboutSection>
			<SectionHeading>
				<h1>About Me</h1>
			</SectionHeading>
			<AboutContainer>
				<AboutText>
					<p>
						Hey there! I'm Michael, a <span>web developer</span> with a passion
						for all things nerdy. I started writing code way back in{' '}
						<span>2019</span> and and since then, I have been constantly
						learning and growing my skills. I've had my highs and lows like most
						software engineers, but I'm determined to continuously improve and
						succeed.
					</p>
					<p>
						My main focus is on <span>front-end development</span>, where I love
						to create beautiful and interactive user experiences. I am
						proficient in <span>HTML</span>, <span>CSS</span>,{' '}
						<span>JavaScript</span>, and <span>React</span>, and have a solid
						understanding of responsive design principles.
					</p>
					<p>
						In my free time, I enjoy watching anime, reading fantasy novels, and
						experimenting with new technologies. I am always eager to take on
						new challenges and expand my knowledge in the field of web
						development.
					</p>
				</AboutText>
			</AboutContainer>
		</AboutSection>
	);
};

export default About;
