
import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css'
import Layout from './routes/Layout'
import theme from './theme';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
      </ThemeProvider>
    </>
  )
}

export default App
