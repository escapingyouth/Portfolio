import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Preloader from './components/preloader/Preloader';
import Navigation from './components/navigation/Navigation';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, []);

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
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<Navigation />
					<Main />
					<Footer />
				</>
			)}
		</>
	);
};

export default App;
