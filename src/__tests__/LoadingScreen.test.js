import { render } from '@testing-library/react';
import LoadingScreen from '../components/LoadingScreen';

describe('LoadingScreen', () => {
  test('renders LoadingScreen component', () => {
    const { getByTestId } = render(<LoadingScreen />);
    const loadingScreen = getByTestId('loading-screen');
    expect(loadingScreen).toBeInTheDocument();
  });

  test('renders Spinner component', () => {
    const { getByTestId } = render(<LoadingScreen />);
    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
