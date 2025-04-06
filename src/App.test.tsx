// app.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Adjust if your store file path is different
import App from './App';

describe('App Component', () => {
  test('renders the main app elements correctly', () => {
    // Render the app with Redux store
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(/Live Football Scoreboard/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the StartMatchForm component is rendered
    const startMatchFormElement = screen.getByTestId('start-match-form');
    expect(startMatchFormElement).toBeInTheDocument();

    // Check if the ScoreBoard component is rendered
    const scoreBoardElement = screen.getByTestId('score-board');
    expect(scoreBoardElement).toBeInTheDocument();
  });
});
