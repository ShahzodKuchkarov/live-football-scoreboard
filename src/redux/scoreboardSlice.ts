import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Match {
    home:string;
    away:string;
    homeScore:number;
    awayScore:number;
    startTime:number;
}

interface ScoreBoardState {
    matches: Match[];
}

const initialState: ScoreBoardState = {
    matches: [],
}

const scoreboardSlice = createSlice({
    name: 'scoreboard',
    initialState,
    reducers:{
        startMatch: (state, action: PayloadAction<{ home: string; away: string }>) => {
            state.matches.push({ ...action.payload, homeScore: 0, awayScore: 0, startTime: Date.now() });
    },
    updateScore:(state, action: PayloadAction<{ home: string; away: string; homeScore: number; awayScore: number }>) => {
        const match = state.matches.find(m => m.home === action.payload.home && m.away === action.payload.away);
        if (match) {
          match.homeScore = action.payload.homeScore;
          match.awayScore = action.payload.awayScore;
        }
      },
      finishMatch: (state, action: PayloadAction<{ home: string; away: string }>) => {
        state.matches = state.matches.filter(m => !(m.home === action.payload.home && m.away === action.payload.away));
      },
    },
});

export const {startMatch, updateScore, finishMatch} = scoreboardSlice.actions;
export default scoreboardSlice.reducer;