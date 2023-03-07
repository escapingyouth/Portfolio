import styled from 'styled-components';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { colors } from '../../_variables';

export const GithubIcon = styled(FaGithub)`
	color: ${colors.primary};
	font-size: 1.3rem;
`;
export const LinkedInIcon = styled(FaLinkedin)`
	color: ${colors.primary};
	font-size: 1.3rem;
`;
export const EmailIcon = styled(FiMail)`
	color: ${colors.primary};
	font-size: 1.3rem;
`;