import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './pages/NotFound';

describe('test app.tsx', () => {
  it('render app.tsx', () => {
    // arrange
    render(<NotFound />);
    // act
    // assert
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('NotFound');
  });
});
