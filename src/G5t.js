import { render, screen } from '@testing-library/react';
import G5 from './G5';

test('renders learn react link', () => {
  render(<G5 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
