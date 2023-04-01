import { SectionHeading } from '../main/main.styles';
import {
	PortfolioSection,
	PortoflioText,
	PortfolioContainer,
	ProjectContainer,
	ProjectImageContainer,
	ProjectDetailsContainer,
	ProjectHeader,
	ProjectLinkContainer,
	ProjectIconsContainer,
	ProjectDescription
} from './portfolio.styles';

import {
	HTMLIconContainer,
	JSIconContainer,
	CSSIconContainer,
	ReactIconContainer,
	SassIconContainer,
	FirebaseIconContainer,
	StyledComponentsIconContainer,
	FigmaIconContainer,
	GithubLinkContainer,
	LinkIconContainer
} from '../icons/icon-container.styles';

import {
	HTMLIcon,
	CSSIcon,
	JSIcon,
	GithubIcon,
	LinkIcon,
	ReactIcon,
	SassIcon,
	FirebaseIcon,
	FigmaIcon,
	StyledComponentsIcon
} from '../icons/icons.styles';

import ecommerceImage from '../../assets/ecommerce-app.png';
import weatherAppImage from '../../assets/weather-app.png';
import movieAppImage from '../../assets/movie-app.png';

const Portfolio = () => {
	return (
		<PortfolioSection id='section-portfolio'>
			<SectionHeading>
				<h4>My Portfolio</h4>
			</SectionHeading>
			<PortoflioText>
				<p>Here's a curated list of what I've built</p>
			</PortoflioText>
			<PortfolioContainer>
				<ProjectContainer>
					<ProjectImageContainer>
						<img src={ecommerceImage} alt='e-commerce app' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						<ProjectHeader>
							<h3>E-commerce App</h3>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/ecommerceApp'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://my-ecommerce-site.vercel.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>

						<ProjectIconsContainer>
							<JSIconContainer>
								<JSIcon />
								<span>JavaScript</span>
							</JSIconContainer>
							<ReactIconContainer>
								<ReactIcon />
								<span>React</span>
							</ReactIconContainer>
							<SassIconContainer>
								<SassIcon />
								<span>Sass</span>
							</SassIconContainer>
							<FirebaseIconContainer>
								<FirebaseIcon />
								<span>Firebase</span>
							</FirebaseIconContainer>
							<FigmaIconContainer>
								<FigmaIcon />
								<span>Figma</span>
							</FigmaIconContainer>
							<StyledComponentsIconContainer>
								<StyledComponentsIcon />
								<span>Styled-components</span>
							</StyledComponentsIconContainer>
						</ProjectIconsContainer>
						<ProjectDescription>
							<p>
								A website where one can purchase various men's, women's, and
								kids clothings and accessories
							</p>
						</ProjectDescription>
					</ProjectDetailsContainer>
				</ProjectContainer>
				<ProjectContainer>
					<ProjectImageContainer>
						<img src={weatherAppImage} alt='weather-app' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						<ProjectHeader>
							<h3>Weather App</h3>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/weatherApp'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://weatherapp-michaelka.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectIconsContainer>
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
						</ProjectIconsContainer>
						<ProjectDescription>
							<p>
								A weather app that displays different weather variations in
								cities all around the world
							</p>
						</ProjectDescription>
					</ProjectDetailsContainer>
				</ProjectContainer>
				<ProjectContainer>
					<ProjectImageContainer>
						<img src={movieAppImage} alt='movie-app' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						<ProjectHeader>
							<h3>Movies Galore</h3>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/movieApp/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://moviesgalore.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectIconsContainer>
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
						</ProjectIconsContainer>
						<ProjectDescription>
							<p>
								A movie app I created to practice my knowledge of APIs using the
								TMDB API
							</p>
						</ProjectDescription>
					</ProjectDetailsContainer>
				</ProjectContainer>
				<h2>Other Noteworthy Projects</h2>
			</PortfolioContainer>
		</PortfolioSection>
	);
};

export default Portfolio;
