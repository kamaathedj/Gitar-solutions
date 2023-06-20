import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('test app.tsx', () => {
  it('render app.tsx', () => {
    // arrange
    render(<App />);
    // act
    // assert
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world');
  });
});
