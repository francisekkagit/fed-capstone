import { render, screen } from '@testing-library/react';
import Home from './Home'; // adjust the path if needed

test('renders Reserve a Table button', () => {
  render(<Home />);

  // Check if the "Reserve a Table" button is in the document
  const reserveButton = screen.getByText(/Reserve a Table/i);
  expect(reserveButton).toBeInTheDocument();
});

test('renders Order Online button', () => {
  render(<Home />);

  // Check if the "Order Online" button is in the document
  const orderButton = screen.getByText(/Order Online/i);
  expect(orderButton).toBeInTheDocument();
});