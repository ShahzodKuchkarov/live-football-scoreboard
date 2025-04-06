import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateScore, finishMatch } from '../redux/scoreboardSlice';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  Stack,
} from '@mui/material';

interface MatchCardProps {
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
}

const MatchCard: React.FC<MatchCardProps> = ({ home, away, homeScore, awayScore }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newHomeScore, setNewHomeScore] = useState(homeScore);
  const [newAwayScore, setNewAwayScore] = useState(awayScore);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateScore({ home, away, homeScore: newHomeScore, awayScore: newAwayScore }));
    setIsEditing(false);
  };

  const handleFinish = () => {
    dispatch(finishMatch({ home, away }));
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {home} {homeScore} - {awayScore} {away}
        </Typography>

        {isEditing ? (
          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                label={`${home} Score`}
                type="number"
                value={newHomeScore}
                onChange={(e) => setNewHomeScore(Number(e.target.value))}
                size="small"
              />
              <TextField
                label={`${away} Score`}
                type="number"
                value={newAwayScore}
                onChange={(e) => setNewAwayScore(Number(e.target.value))}
                size="small"
              />
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)} variant="outlined" color="inherit">
                Cancel
              </Button>
            </Stack>
          </Box>
        ) : (
          <Stack direction="row" spacing={2} mt={2}>
            <Button onClick={() => setIsEditing(true)} variant="outlined">
              Update Score
            </Button>
            <Button onClick={handleFinish} variant="outlined" color="error">
              Finish Match
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default MatchCard;
