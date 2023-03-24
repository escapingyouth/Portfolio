import styled from 'styled-components';

import { colors } from '../../utils/_variables';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cpp } from '../../assets/cpp.svg';

import {
	FaGithub,
	FaLinkedin,
	FaHtml5,
	FaGitAlt,
	FaFigma
} from 'react-icons/fa';

import { FiMail } from 'react-icons/fi';

import {
	DiJavascript1,
	DiCss3,
	DiReact,
	DiSass,
	DiBootstrap,
	DiPython
} from 'react-icons/di';

import { TbBrandRedux } from 'react-icons/tb';

import {
	SiTypescript,
	SiFirebase,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiMicrosoftword,
	SiMicrosoftexcel,
	SiMicrosoftpowerpoint
} from 'react-icons/si';

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

export const HTMLIcon = styled(FaHtml5)`
	color: #ff6d00;
	font-size: 1.4rem;
`;

export const JSIcon = styled(DiJavascript1)`
	color: #faf089;
	font-size: 1.4rem;
`;

export const CSSIcon = styled(DiCss3)`
	color: #039be5;
	font-size: 1.4rem;
`;

export const ReactIcon = styled(DiReact)`
	color: #80deea;
	font-size: 1.4rem;
`;

export const ReduxIcon = styled(TbBrandRedux)`
	color: #7e57c2;
	font-size: 1.4rem;
`;

export const SassIcon = styled(DiSass)`
	color: #fbb6ce;
	font-size: 1.4rem;
`;

export const BootstrapIcon = styled(DiBootstrap)`
	color: #673ab7;
	font-size: 1.4rem;
`;

export const CppIcon = styled(Cpp)``;

export const PythonIcon = styled(DiPython)`
	color: #ffc107;
	font-size: 1.4rem;
`;

export const TSIcon = styled(SiTypescript)`
	color: #1976d2;
	font-size: 1.4rem;
`;

export const FirebaseIcon = styled(SiFirebase)`
	color: #ff6d00;
	font-size: 1.4rem;
`;

export const GitIcon = styled(FaGitAlt)`
	color: #f4511e;
	font-size: 1.4rem;
`;

export const PhotoshopIcon = styled(SiAdobephotoshop)`
	color: #03a9f4;
	font-size: 1.4rem;
`;

export const IllustratorIcon = styled(SiAdobeillustrator)`
	color: #ff5722;
	font-size: 1.4rem;
`;

export const FigmaIcon = styled(FaFigma)`
	color: #29b6f6;
	font-size: 1.4rem;
`;

export const WordIcon = styled(SiMicrosoftword)`
	color: #0d47a1;
	font-size: 1.4rem;
`;

export const ExcelIcon = styled(SiMicrosoftexcel)`
	color: #2e7d32;
	font-size: 1.4rem;
`;

export const PowerpointIcon = styled(SiMicrosoftpowerpoint)`
	color: #e64a19;
	font-size: 1.4rem;
`;
