import React from 'react';
import ReactDOM from 'react-dom/client';

import { NavMenuProvider } from './context/NavMenuContext';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<NavMenuProvider>
			<App />
		</NavMenuProvider>
	</React.StrictMode>
);
