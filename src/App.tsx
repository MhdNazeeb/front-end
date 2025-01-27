
import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css'
import Layout from './routes/Layout'
import theme from './theme';

function App() {

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
