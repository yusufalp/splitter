import { render, screen } from '@testing-library/react';
import App from './App';

test('calculator for a tip', () => {
  render(<App />);
  const linkElement = screen.getByText(/Splitter/i);
  expect(linkElement).toBeInTheDocument();
});
