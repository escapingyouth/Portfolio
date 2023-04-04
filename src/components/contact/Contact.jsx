import { SectionHeading } from '../main/main.styles';
import { ContactSection, ContactText } from './contact.styles';
import { Button, ButtonTypeClasses } from '../button/Button';

const Contact = () => {
	return (
		<ContactSection id='section-contact'>
			<SectionHeading>
				<h4>Now What?</h4>
			</SectionHeading>
			<ContactText>
				<h3>Keep in Touch </h3>
				<p>
					I'm currently specializing in <span>Front-end Development</span>.
				</p>
				<p>Feel free to get in touch and talk more about your projects.</p>
			</ContactText>
			<Button
				buttonType={ButtonTypeClasses.base}
				href='mailto:@michael.k.a.amankwah@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				Say Hi
			</Button>
		</ContactSection>
	);
};

export default Contact;
