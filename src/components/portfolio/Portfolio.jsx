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
	ProjectDescription,
	ProjectCardContainer,
	ProjectCard,
	ProjectCardText
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
	StyledComponentsIcon,
	FolderIcon
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
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='50'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
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
								A React-based ecommerce website with responsive design and
								user-friendly interface for easy browsing and purchasing.
							</p>
						</ProjectDescription>
					</ProjectDetailsContainer>
				</ProjectContainer>
				<ProjectContainer
					data-aos='fade-left'
					data-aos-delay='100'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
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
								A weather app that uses the OpenWeather API to provide users
								with up-to-date weather information based on their current
								location.
							</p>
						</ProjectDescription>
					</ProjectDetailsContainer>
				</ProjectContainer>
				<ProjectContainer
					data-aos='fade-right'
					data-aos-delay='200'
					data-aos-easing='linear'
					data-aos-duration='500'
				>
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
								A movie app that leverages the TMDB API to provide users with an
								extensive database of movies, allowing them to browse and search
								for their favorite titles
							</p>
						</ProjectDescription>
					</ProjectDetailsContainer>
				</ProjectContainer>
				<h2>Other Noteworthy Projects</h2>
				<ProjectCardContainer>
					<ProjectCard data-aos='fade-right' data-aos-duration='1000'>
						<ProjectHeader>
							<FolderIcon></FolderIcon>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/netflix-clone'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://netflix-gh.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectCardText>
							<h3>Netflix UI Clone</h3>
							<p>
								A clone of the user interface (UI) of the popular streaming
								platform, Netflix. The UI was built using HTML,CSS and
								JavaScript with the aim of reproducing the familiar look and
								feel of the original platform.
							</p>
						</ProjectCardText>
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
					</ProjectCard>
					<ProjectCard data-aos='fade-left' data-aos-duration='1000'>
						<ProjectHeader>
							<FolderIcon></FolderIcon>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/microsoft-clone'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://microsoft-ui-clone.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectCardText>
							<h3>Microsoft UI Clone</h3>
							<p>
								A clone of the UI of the Microsoft homepage. I worked on this to
								improve my knowledge of flexbox and grid layout. I also worked
								on this to learn how to implement slider components in websites
							</p>
						</ProjectCardText>
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
					</ProjectCard>
					<ProjectCard data-aos='fade-right' data-aos-duration='1000'>
						<ProjectHeader>
							<FolderIcon></FolderIcon>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/disneyPlus-clone'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://disneyplus-homepage-clone.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectCardText>
							<h3>Disney Plus</h3>
							<p>
								A clone of the user interface (UI) of the popular streaming
								platform, Disney Plus using HTML, CSS, and JavaScript. The use
								of CSS flexbox and grid layouts allowed for the creation of a
								responsive design that adapts to different screen sizes
							</p>
						</ProjectCardText>
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
					</ProjectCard>
					<ProjectCard data-aos='fade-left' data-aos-duration='1000'>
						<ProjectHeader>
							<FolderIcon></FolderIcon>
							<ProjectLinkContainer>
								<GithubLinkContainer
									href='https://github.com/escapingyouth/apple-clone'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://apple-homepage-ui-clone.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectCardText>
							<h3>Apple UI Clone</h3>
							<p>
								A clone of the user interface (UI) of the Apple website, built
								using HTML, CSS, and JavaScript. I cloned this website because
								of how aesthetically pleasing the UI looked and I wanted to
								replicate just that.
							</p>
						</ProjectCardText>
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
					</ProjectCard>
				</ProjectCardContainer>
			</PortfolioContainer>
		</PortfolioSection>
	);
};

export default Portfolio;
