import styled from 'styled-components';
import { colors } from '../../utils/_variables';

import { Button, ButtonTypeClasses } from '../button/Button';

import { GithubIcon, EmailIcon, LinkedInIcon } from './icons.styles';

export const GithubLink = () => {
	return (
		<Button
			buttonType={ButtonTypeClasses.inverted}
			href='https://github.com/escapingyouth'
			target='_blank'
			rel='noopener noreferrer'
		>
			<GithubIcon />
			<span>Github</span>
		</Button>
	);
};

export const EmailLink = () => {
	return (
		<Button
			buttonType={ButtonTypeClasses.inverted}
			href='mailto:@michael.k.a.amankwah@gmail.com'
			target='_blank'
			rel='noopener noreferrer'
		>
			<EmailIcon />
			<span>Email</span>
		</Button>
	);
};

export const LinkedInLink = () => {
	return (
		<Button
			buttonType={ButtonTypeClasses.inverted}
			href='https://www.linkedin.com/in/michael-kwame-appiah/'
			target='_blank'
			rel='noopener noreferrer'
		>
			<LinkedInIcon />
			<span>LinkedIn</span>
		</Button>
	);
};

export const HTMLIconContainer = styled.div`
	background-color: rgba(255, 111, 0, 0.16);
	color: #ff6d00;
	border: 1px solid rgba(255, 111, 0, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(255, 111, 0, 0.12);
	}
`;

export const CSSIconContainer = styled.div`
	background-color: rgba(3, 155, 229, 0.16);
	color: #039be5;
	border: 1px solid rgba(3, 155, 229, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(3, 155, 229, 0.12);
	}
`;

export const JSIconContainer = styled.div`
	background-color: rgba(250, 240, 137, 0.16);
	color: #faf089;
	border: 1px solid rgba(250, 240, 137, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(250, 240, 137, 0.12);
	}
`;

export const ReactIconContainer = styled.div`
	background-color: rgba(128, 222, 234, 0.16);
	color: #80deea;
	border: 1px solid rgba(128, 222, 234, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(128, 222, 234, 0.12);
	}
`;

export const ReduxIconContainer = styled.div`
	background-color: rgba(126, 87, 194, 0.16);
	color: #7e57c2;
	border: 1px solid rgba(126, 87, 194, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(126, 87, 194, 0.12);
	}
`;

export const SassIconContainer = styled.div`
	background-color: rgba(251, 182, 206, 0.16);
	color: #fbb6ce;
	border: 1px solid rgba(251, 182, 206, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(251, 182, 206, 0.12);
	}
`;

export const BootstrapIconContainer = styled.div`
	background-color: rgba(103, 58, 183, 0.16);
	color: #673ab7;
	border: 1px solid rgba(103, 58, 183, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(103, 58, 183, 0.12);
	}
`;

export const CppIconContainer = styled.div`
	background-color: rgba(0, 117, 192, 0.16);
	color: #0075c0;
	border: 1px solid rgba(0, 117, 192, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(0, 117, 192, 0.12);
	}
`;

export const PythonIconContainer = styled.div`
	background-color: rgba(255, 193, 7, 0.16);
	color: #ffc107;
	border: 1px solid rgba(255, 193, 7, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(255, 193, 7, 0.12);
	}
`;

export const TSIconContainer = styled.div`
	background-color: rgba(25, 118, 210, 0.16);
	color: #1976d2;
	border: 1px solid rgba(25, 118, 210, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(25, 118, 210, 0.12);
	}
`;

export const FirebaseIconContainer = styled.div`
	background-color: rgba(255, 111, 0, 0.16);
	color: #ff6d00;
	border: 1px solid rgba(255, 111, 0, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(255, 111, 0, 0.12);
	}
`;

export const GitIconContainer = styled.div`
	background-color: rgba(244, 81, 30, 0.16);
	color: #f4511e;
	border: 1px solid rgba(244, 81, 30, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(244, 81, 30, 0.12);
	}
`;

export const PhotoshopIconContainer = styled.div`
	background-color: rgba(3, 169, 244, 0.16);
	color: #03a9f4;
	border: 1px solid rgba(3, 169, 244, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(3, 169, 244, 0.12);
	}
`;

export const IllustratorIconContainer = styled.div`
	background-color: rgba(255, 87, 34, 0.16);
	color: #ff5722;
	border: 1px solid rgba(255, 87, 34, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(255, 87, 34, 0.12);
	}
`;

export const FigmaIconContainer = styled.div`
	background: linear-gradient(${colors.gradient});
	color: #29b6f6;
	cursor: pointer;
`;

export const WordIconContainer = styled.div`
	background-color: rgba(13, 71, 161, 0.16);
	color: #0d47a1;
	border: 1px solid rgba(13, 71, 161, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(13, 71, 161, 0.12);
	}
`;

export const ExcelIconContainer = styled.div`
	background-color: rgba(46, 125, 50, 0.16);
	color: #2e7d32;
	border: 1px solid rgba(46, 125, 50, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(46, 125, 50, 0.12);
	}
`;

export const PowerpointIconContainer = styled.div`
	background-color: rgba(230, 74, 25, 0.16);
	color: #e64a19;
	border: 1px solid rgba(230, 74, 25, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(230, 74, 25, 0.12);
	}
`;

export const StyledComponentsIconContainer = styled.div`
	background-color: rgba(236, 77, 132, 0.16);
	color: #ec4d84;
	border: 1px solid rgba(236, 77, 132, 0.16);
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: rgba(236, 77, 132, 0.12);
	}
`;

export const GithubLinkContainer = styled.a``;

export const LinkIconContainer = styled.a``;
