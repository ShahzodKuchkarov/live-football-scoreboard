import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { startMatch } from '../redux/scoreboardSlice';
import { TextField, Button, Stack } from '@mui/material';

function StartMatchForm() {
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');
  const dispatch = useDispatch();

  const handleStart = () =>{
    if (home && away) {
      dispatch(startMatch({home, away}));
      setHome('');
      setAway('');
    }
  }
  return (
    <Stack>
      <TextField label="Home Team" value={home} onChange={e => setHome(e.target.value)} />
      <TextField label="Away Team" value={away} onChange={e => setAway(e.target.value)} />
      <Button variant="contained" onClick={handleStart}>Start</Button>
    </Stack>
  )
}

export default StartMatchForm