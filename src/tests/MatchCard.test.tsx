import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MatchCard from '../components/MatchCard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { updateScore, finishMatch } from '../redux/scoreboardSlice';

jest.mock('../store/scoreboardSlice', () => ({
  updateScore: jest.fn(),
  finishMatch: jest.fn(),
}));

const mockStore = configureStore([]);

describe('MatchCard', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('should update score when form is submitted', () => {
    render(
      <Provider store={store}>
        <MatchCard home="Spain" away="Brazil" homeScore={1} awayScore={2} />
      </Provider>
    );

    // Click 'Update Score' button
    fireEvent.click(screen.getByText(/update score/i));

    // Fill new scores
    fireEvent.change(screen.getByDisplayValue('1'), { target: { value: '3' } });
    fireEvent.change(screen.getByDisplayValue('2'), { target: { value: '4' } });

    // Submit
    fireEvent.click(screen.getByText(/save/i));

    expect(updateScore).toHaveBeenCalledWith({
      home: 'Spain',
      away: 'Brazil',
      homeScore: 3,
      awayScore: 4,
    });

    expect(store.dispatch).toHaveBeenCalled();
  });

  test('should dispatch finishMatch on click', () => {
    render(
      <Provider store={store}>
        <MatchCard home="Germany" away="France" homeScore={2} awayScore={2} />
      </Provider>
    );

    fireEvent.click(screen.getByText(/finish match/i));

    expect(finishMatch).toHaveBeenCalledWith({
      home: 'Germany',
      away: 'France',
    });

    expect(store.dispatch).toHaveBeenCalled();
  });
});
