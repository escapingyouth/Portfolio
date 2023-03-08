import Header from '../header/Header';
import About from '../about/About';

import { MainContent } from './main.styles';

const Main = () => {
	return (
		<MainContent>
			<Header />
			<About />
		</MainContent>
	);
};

export default Main;
