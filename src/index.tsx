import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import App from './App';
import theme from './theme/theme';
import FallbackRender from './FallbackRender';
import reportWebVitals from './reportWebVitals';
import ReactToastify from './styledComponents/ReactToastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={FallbackRender}>
        <CssBaseline />
        <App />
        <ReactToastify />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
