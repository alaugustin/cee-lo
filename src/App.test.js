import { render, screen } from '@testing-library/react';
import ceeLo from './App';

test('renders learn react link', () => {
  render(<ceeLo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
