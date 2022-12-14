import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './themes/GlobalStyle';
import theme from './themes/Theme';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
