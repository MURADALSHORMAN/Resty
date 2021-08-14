import { render, screen } from '@testing-library/react';
import Result from '../results/Results';

xit('Should render results', () => {
  const data = {
    count: 2,
    results: [
      { name: 'fake thing 1', url: 'http://fakethings.com/1' },
      { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    ],
  };
  render(<Result data={data} />);
  const items = screen.getByTestId('preResults');
  expect(items).toHaveTextContent('fake thing 1');
});