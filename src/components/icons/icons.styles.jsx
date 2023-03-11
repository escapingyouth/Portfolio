import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { colors } from '../../utils/_variables';

export const LogoIcon = styled(Logo)`
	cursor: pointer;
`;

export const GithubIcon = styled(FaGithub)`
	color: ${colors.primary};
	font-size: 1rem;

	@media only screen and (max-width: 18em) {
		font-size: 0.8rem;
	}
`;
export const LinkedInIcon = styled(FaLinkedin)`
	color: ${colors.primary};
	font-size: 1rem;

	@media only screen and (max-width: 18em) {
		font-size: 0.8rem;
	}
`;
export const EmailIcon = styled(FiMail)`
	color: ${colors.primary};
	font-size: 1rem;

	@media only screen and (max-width: 18em) {
		font-size: 0.8rem;
	}
`;
