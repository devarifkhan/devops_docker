import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import App from './App';

test('renders Hello from the React Frontend!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello from the React Frontend!/i);
  expect(linkElement).toBeInTheDocument();
});
