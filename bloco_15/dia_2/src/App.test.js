import App from './App';
import renderWithRouter from './renderWithRouter';
import React from 'react';
import { fireEvent } from '@testing-library/react';

describe('Testa a minha aplicação', () => {
  it('Testa se o componente App é renderizado', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText('Você está na página Início');
    expect(home).toBeInTheDocument();
  });
  it('Testa se o componente Sobre é renderizado', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const sobre = getByText('Sobre');
    fireEvent.click(sobre);
    expect(history.location.pathname).toBe('/about');
    expect(getByText('Você está na página Sobre')).toBeInTheDocument();
  })
})
