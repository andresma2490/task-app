import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import themeConfig from './config/theme';
import Routes from './routes/routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={themeConfig}>
      <ToastContainer autoClose={2000}/>
      <Routes/>
      <Footer/>
    </ThemeProvider>
    </div>
  );
}

export default App;
