import {render, screen} from '@testing-library/react';
import MatchCard from '../components/MatchCard';

test('renders match card', () =>{
    render(<MatchCard home="A" away="B" homeScore={1} awayScore={2}/>);
    expect(screen.getByText("A 1 - 2 B")).toBeInTheDocument();
})