import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

interface Props{
    home: string;
    away:string;
    homeScore:number;
    awayScore:number;
}

function MatchCard({home, away, homeScore, awayScore}:Props) {
  return (
    <Card sx={{mb:2}}>
<CardContent>
    <Typography>
    {`${home} ${homeScore} - ${awayScore} ${away}`}
    </Typography>
</CardContent>
    </Card>
  )
}

export default MatchCard