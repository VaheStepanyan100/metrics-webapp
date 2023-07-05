import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RevenueGraph from '../components/RevenueGraph';

jest.mock('../utils/getCompanyName', () => jest.fn().mockReturnValue('Company Name'));

describe('RevenueGraph', () => {
  test('renders correctly', () => {
    const company = [
      { symbol: 'apple', date: '2021-01-01' },
      { symbol: 'google', date: '2022-01-01' },
      { symbol: 'meta', date: '2023-01-01' },
    ];
    const { container } = render(
      <MemoryRouter>
        <RevenueGraph company={company} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
