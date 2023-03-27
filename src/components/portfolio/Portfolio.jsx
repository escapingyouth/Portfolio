import { SectionHeading } from '../main/main.styles';
import { PortfolioSection, PortoflioText } from './portfolio.styles';

const Portfolio = () => {
	return (
		<PortfolioSection id='section-portfolio'>
			<SectionHeading>
				<h4>My Portfolio</h4>
			</SectionHeading>
			<PortoflioText>
				<p>Here's a curated list of what I've built</p>
			</PortoflioText>
		</PortfolioSection>
	);
};

export default Portfolio;
