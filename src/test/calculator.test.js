import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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
    const { container } = render(<Calculator />);
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    expect(form.querySelectorAll('input').length).toBe(2);
    expect(form.querySelector('button')).toBeInTheDocument();
    expect(form.querySelector('p.result')).toBeInTheDocument();
  });

  it('should display the result on add', () => {
    const { container } = render(<Calculator />);
    const form = container.querySelector('form');

    const input1 = form.querySelectorAll('input')[0];
    const input2 = form.querySelectorAll('input')[1];
    const button = form.querySelector('button');

    input1.value = 3;
    input2.value = 5;

    fireEvent.click(button);

    const result = container.querySelector('.result');
    expect(result.textContent).toEqual('8');
  });
});