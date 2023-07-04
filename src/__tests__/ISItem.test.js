import { render } from '@testing-library/react';
import ISItem from '../components/ISItem';

describe('ISItem', () => {
  test('renders with the correct background color for even index', () => {
    const parameter = ['Value 1', 'Value 2'];
    const index = 2;

    const { container } = render(
      <ISItem parameter={parameter} index={index} />,
    );
    expect(container.firstChild).toHaveClass('bg-buttonSecondColor');
  });

  test('renders with the correct background color for odd index', () => {
    const parameter = ['Value 1', 'Value 2'];
    const index = 1;

    const { container } = render(
      <ISItem parameter={parameter} index={index} />,
    );
    expect(container.firstChild).toHaveClass('bg-buttonFirstColor');
  });

  test('renders the parameter values correctly', () => {
    const parameter = ['Value 1', 'Value 2'];
    const index = 0;

    const { getByText } = render(
      <ISItem parameter={parameter} index={index} />,
    );
    expect(getByText('Value 1')).toBeInTheDocument();
    expect(getByText('Value 2')).toBeInTheDocument();
  });
});
