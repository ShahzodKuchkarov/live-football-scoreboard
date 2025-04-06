import { fireEvent, render,screen } from '@testing-library/react';
import StartMatchForm from '../components/StartMatchForm';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

test('adds a match on form submit', ()=>{
    render(<Provider store={store}><StartMatchForm/></Provider>);
    fireEvent.change(screen.getByLabelText(/home team/i), { target: { value: 'X' } });
    fireEvent.change(screen.getByLabelText(/away team/i), { target: { value: 'Y' } });
    fireEvent.click(screen.getByText(/start/i));
    expect(store.getState().scoreboard.matches[0].home).toBe('X');
})