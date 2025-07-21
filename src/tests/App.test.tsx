import { beforeEach, describe, expect, it } from 'vitest'
import App from '../App';
import { fireEvent, render, screen } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })
  it('renders title correctly', () => {
    expect(screen.getByText('GitHub Actions Practice')).toBeInTheDocument();
  })
  it('increments count value on button click', () => {
    const incrementButton = screen.getByTestId('increment-button');

    expect(incrementButton).toBeInTheDocument();
    expect(incrementButton).toHaveTextContent('Count is 0')

    fireEvent.click(incrementButton)
    expect(incrementButton).toHaveTextContent('Count is 1')
  })
})
