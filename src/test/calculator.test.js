import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator, { getSum } from '../components/calculator';

describe('Calculator component', () => {
  it('should render snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('should return the correct sum', () => {
    const sum = getSum(3, 5);
    expect(sum).toEqual(8);
  });

  it('should render required form elements', () => {
    render(<Calculator />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Result:')).toBeInTheDocument();
  });

  it('should display the result on add', () => {
    render(<Calculator />);
    const input1 = screen.getAllByRole('textbox')[0];
    const input2 = screen.getAllByRole('textbox')[1];
    const button = screen.getByRole('button');

    input1.value = 3;
    input2.value = 5;
    button.click();

    expect(screen.getByText('Result: 8')).toBeInTheDocument();
  });
});