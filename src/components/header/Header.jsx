import Typewriter from 'typewriter-effect';
import { MainHeader, TextContainer, LinksContainer } from './header.styles';

import {
	GithubLink,
	EmailLink,
	LinkedInLink
} from '../icons/icon-container.styles';

const Header = () => {
	return (
		<MainHeader>
			<TextContainer>
				<h1>Hi, my name is</h1>
				<h2>Michael Appiah</h2>

				<h3>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('I code your dreams into reality.').start();
						}}
						options={{
							autoStart: true,
							cursor: '',
							pauseFor: 0
						}}
					/>
				</h3>

				<p>
					I'm a <span>web developer</span> who crafts <span>user-friendly</span>{' '}
					websites with a touch of <span>wow-factor</span>. My coding skills are
					sharp and my passion for web development is borderline{' '}
					<span>obsessive</span>. Let's build something amazing together!
				</p>
			</TextContainer>
			<LinksContainer>
				<GithubLink />
				<LinkedInLink />
				<EmailLink />
			</LinksContainer>
		</MainHeader>
	);
};

export default Header;
