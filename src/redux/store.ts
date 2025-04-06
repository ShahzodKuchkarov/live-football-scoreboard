import {configureStore} from '@reduxjs/toolkit';
import scoreBoardReducer from './scoreboardSlice';

export const store = configureStore({
    reducer:{
        scoreboard: scoreBoardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;