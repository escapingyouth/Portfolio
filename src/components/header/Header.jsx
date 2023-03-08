import { MainHeader, TextContainer, LinksContainer } from './header.styles';
import { GithubIcon, LinkedInIcon, EmailIcon } from '../icons/icons.styles';
import { ButtonTypeClasses } from '../button/Button';
import Button from '../button/Button';

const Header = () => {
	return (
		<MainHeader>
			<TextContainer>
				<h1>Hi, my name is</h1>
				<h2>Michael Appiah.</h2>
				<h3>I code your dreams into reality.</h3>
				<p>
					I'm a <span>web developer</span> who crafts <span>user-friendly</span>{' '}
					websites with a touch of <span>wow-factor</span>. My coding skills are
					sharp and my passion for web development is borderline{' '}
					<span>obsessive</span>. Let's build something amazing together!
				</p>
			</TextContainer>
			<LinksContainer>
				<Button
					buttonType={ButtonTypeClasses.inverted}
					href='https://github.com/escapingyouth'
					target='_blank'
					rel='noopener noreferrer'
				>
					<GithubIcon />
					<span>Github</span>
				</Button>
				<Button
					buttonType={ButtonTypeClasses.inverted}
					href='https://www.linkedin.com/in/michael-kwame-appiah/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<LinkedInIcon />
					<span>LinkedIn</span>
				</Button>
				<Button
					buttonType={ButtonTypeClasses.inverted}
					href='mailto:@michael.k.a.amankwah@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<EmailIcon />
					<span>Email</span>
				</Button>
			</LinksContainer>
		</MainHeader>
	);
};

export default Header;
