import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the app', () => {
    render(<App />);
    expect(
      screen.getByText('Vite + React + TS Boilerplate')
    ).toBeInTheDocument();
  });
});
