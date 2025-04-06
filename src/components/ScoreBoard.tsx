import React from 'react'
import { useSelector } from 'react-redux'
import MatchCard from './MatchCard'
import { RootState } from '../redux/store'

function ScoreBoard() {
const matches = useSelector((state:RootState) => state.scoreboard.matches)
.slice()
.sort((a, b) => {
  const totalA = a.homeScore + a.awayScore;
  const totalB = b.homeScore + b.awayScore;
  if (totalA !== totalB) return totalB - totalA;
  return b.startTime - a.startTime;
});
  
  return (
    <>
    {matches.map((match, idx) =>(
      <MatchCard key={idx} {...match}/>
    ))}
    </>
  )
}

export default ScoreBoard