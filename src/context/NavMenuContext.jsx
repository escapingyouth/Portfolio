import { createContext, useState, useEffect } from 'react';

export const NavMenuContext = createContext({
	isNavOpen: false,
	toggleNavMenu: () => {},
	visible: true
});

export const NavMenuProvider = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible]);

	const value = {
		isNavOpen,
		toggleNavMenu,
		visible
	};

	return (
		<NavMenuContext.Provider value={value}>{children}</NavMenuContext.Provider>
	);
};
