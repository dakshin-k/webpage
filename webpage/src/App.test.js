import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 🐱', () => {
  render(<App />);

  const cat = screen.getByText(/🐱/);
  
  expect(cat).toBeInTheDocument();
});
