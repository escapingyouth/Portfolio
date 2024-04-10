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
	TSIconContainer,
	TailwindIconContainer,
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
	TailwindIcon,
	JSIcon,
	TSIcon,
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
import envisionDigitalImage from '../../assets/envision-digital.png';
import tgiImage from '../../assets/tgi.png';
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
						<img src={tgiImage} alt='tgi' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						<ProjectHeader>
							<h3>TGI Landing Page</h3>
							<ProjectLinkContainer>
								<LinkIconContainer
									href='https://github.com/escapingyouth/TGI'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectIconsContainer>
							<TSIconContainer>
								<TSIcon />
								<span>TypeScript</span>
							</TSIconContainer>
							<ReactIconContainer>
								<ReactIcon />
								<span>React</span>
							</ReactIconContainer>
							<FigmaIconContainer>
								<FigmaIcon />
								<span>Figma</span>
							</FigmaIconContainer>
							<TailwindIconContainer>
								<TailwindIcon />
								<span>Tailwindcss</span>
							</TailwindIconContainer>
						</ProjectIconsContainer>
						<ProjectDescription>
							<p>Development version of the landing page of TGI</p>
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
						<img src={envisionDigitalImage} alt='envision digital' />
					</ProjectImageContainer>
					<ProjectDetailsContainer>
						<ProjectHeader>
							<h3>Envision Digital Landing Page</h3>
							<ProjectLinkContainer>
								<LinkIconContainer
									href='https://github.com/escapingyouth/envision-digital'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectIconsContainer>
							<TSIconContainer>
								<TSIcon />
								<span>TypeScript</span>
							</TSIconContainer>
							<ReactIconContainer>
								<ReactIcon />
								<span>React</span>
							</ReactIconContainer>
							<FigmaIconContainer>
								<FigmaIcon />
								<span>Figma</span>
							</FigmaIconContainer>
							<TailwindIconContainer>
								<TailwindIcon />
								<span>Tailwindcss</span>
							</TailwindIconContainer>
						</ProjectIconsContainer>
						<ProjectDescription>
							<p>Development version of the landing page of Envision Digital</p>
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
									href='https://github.com/escapingyouth/climaCheck'
									target='_blank'
									rel='noopener noreferrer'
								>
									<GithubIcon></GithubIcon>
								</GithubLinkContainer>
								<LinkIconContainer
									href='https://clima-check.vercel.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<LinkIcon></LinkIcon>
								</LinkIconContainer>
							</ProjectLinkContainer>
						</ProjectHeader>
						<ProjectCardText>
							<h3>ClimaCheck</h3>
							<p>
								A weather app that uses the OpenWeather API to provide users
								with up-to-date weather information based on their current
								location.
							</p>
						</ProjectCardText>
						<ProjectIconsContainer>
							<JSIconContainer>
								<JSIcon />
								<span>JavaScript</span>
							</JSIconContainer>
							<ReactIconContainer>
								<ReactIcon />
								<span>React</span>
							</ReactIconContainer>
							<FigmaIconContainer>
								<FigmaIcon />
								<span>Figma</span>
							</FigmaIconContainer>
							<TailwindIconContainer>
								<TailwindIcon />
								<span>Tailwindcss</span>
							</TailwindIconContainer>
						</ProjectIconsContainer>
					</ProjectCard>
					<ProjectCard data-aos='fade-left' data-aos-duration='1000'>
						<ProjectHeader>
							<FolderIcon></FolderIcon>
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
						<ProjectCardText>
							<h3>Movies Galore</h3>
							<p>
								A movie app that leverages the TMDB API to provide users with an
								extensive database of movies, allowing them to browse and search
								for their favorite titles
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
