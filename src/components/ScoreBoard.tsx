import React from 'react'
import { useSelector } from 'react-redux'
import MatchCard from './MatchCard'
import { RootState } from '../redux/store'

function ScoreBoard() {
const matches = useSelector((state:RootState) => state.scoreboard.matches);

  
  return (
    <>
    {matches.map((match, idx) =>(
      <MatchCard key={idx} {...match}/>
    ))}
    </>
  )
}

export default ScoreBoard