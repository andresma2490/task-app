import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import themeConfig from './config/theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={ themeConfig }>
      <ToastContainer autoClose={2000}/>
      <Navigation/>
        <TaskList/>
      <Footer/>
    </ThemeProvider>
    </div>
  );
}

export default App;
