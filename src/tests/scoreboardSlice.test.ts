import reducer, {startMatch, updateScore, finishMatch} from '../redux/scoreboardSlice';

test ('startMatch works', () =>{
    const next = reducer({matches:[]}, startMatch({home: 'A', away: 'B'}));
    expect(next.matches[0].home).toBe('A');
});

test('updateScore works', () =>{
    const initial = {
        matches: [{home: 'A', away : 'B', homeScore: 0, awayScore: 0, startTime: 1 }],
    };
    const updated = updateScore({ home: 'A', away: 'B', homeScore: 2, awayScore: 1 });
  const result = reducer(initial, updated);
  expect(result.matches[0].homeScore).toBe(2);
});

test('finishMatch works', () => {
    const initial = {
      matches: [{ home: 'A', away: 'B', homeScore: 0, awayScore: 0, startTime: 1 }],
    };
    const result = reducer(initial, finishMatch({ home: 'A', away: 'B' }));
    expect(result.matches).toHaveLength(0);
  });