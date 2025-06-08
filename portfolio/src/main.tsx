import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './reset.css';
import './base.css';
import './variables.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			{' '}
			<App />
		</BrowserRouter>
	</StrictMode>
);
