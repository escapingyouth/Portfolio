import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const App = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			delay: 500,
			duration: 400,
			once: true
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<Navigation />
			<Main />
			<Footer />
		</>
	);
};

export default App;
