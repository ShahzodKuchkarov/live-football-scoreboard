import React from 'react';
import { Container, Typography } from '@mui/material';
import {store} from './redux/store';
import ScoreBoard from './components/ScoreBoard';
import StartMatchForm from './components/StartMatchForm';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm" sx ={{mt:4}}>
         <Typography variant='h4' align='center' gutterBottom>
           Live Football Scoreboard
         </Typography>
         <StartMatchForm/>
         <ScoreBoard/>
    </Container>
    </Provider>
  );
}

export default App;
