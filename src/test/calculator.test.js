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
    expect(form.querySelectorAll('button').length).toBe(1);
    expect(form.querySelectorAll('p.result').length).toBe(1);
  });

  it('should display the result on add', () => {
    const { container } = render(<Calculator />);
    const form = container.querySelector('form');

    form.querySelector('input').value = 3;
    form.querySelectorAll('input')[1].value = 5;
    fireEvent.click(form.querySelector('button'));

    const result = container.querySelector('.result');
    expect(result.textContent).toEqual('8');
  });
});