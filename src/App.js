// App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import LoadingAnimation from './LoadingAnimation';

// Carregamento preguiçoso da LandingPage
const HomePage = lazy(() => import('./components/landingpage/landingpage.jsx'));

function App() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

function AppWrapper() {
  // Configuração do tema customizado (você pode ajustar as cores e fontes conforme desejar)
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0088cc', // cor principal similar à sua brand.500
      },
      secondary: {
        main: '#2c7a7b', // cor secundária
      },
      background: {
        default: '#f7fafc', // equivalente ao gray.50
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
}

export default AppWrapper;
