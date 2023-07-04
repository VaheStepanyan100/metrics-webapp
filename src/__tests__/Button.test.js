import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../components/Button';

describe('Button', () => {
  it('renders the button with correct props', () => {
    const children = 'Button Text';
    const url = 'example-url';
    const iconName = 'example-icon';

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Button url={url} iconName={iconName}>
          {children}
        </Button>
      </BrowserRouter>,
    );

    // Assert the button text
    expect(getByText('Button Text')).toBeInTheDocument();

    // Assert the URL in the NavLink
    expect(getByTestId('nav-link').getAttribute('href')).toBe('/example-url');

    // Assert the icon name passed to ion-icon
    expect(getByTestId('icon').getAttribute('name')).toBe('example-icon');
  });
});
