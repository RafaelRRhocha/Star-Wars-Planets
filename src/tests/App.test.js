import React from 'react';
import { cleanup, render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import testData from './mocks/testData';

describe('Teste da Página Table', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    })
    await act(async () =>{
    render(<App />)
    } )
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('Teste se a Api é Chamada Corretamente e Todos os itens estão presentes', async () => {
    expect(fetch).toHaveBeenCalled();
    expect(await screen.findAllByRole('row')).toHaveLength(11);
  });

  it('Teste se o Filtro Igual a === Funciona Corretamente', async () => {
    fireEvent.change(screen.getByTestId('comparison-filter'), { target: { value: "igual a"} });

    const filterNumber = screen.getByTestId('value-filter');
    userEvent.type(filterNumber, '1000000');

    const buttonFilter = screen.getByTestId('button-filter');
    userEvent.click(buttonFilter);

    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  it('Teste se o Filtro Maior Que > Funciona Corretamente', async () => {
    fireEvent.change(screen.getByTestId('comparison-filter'), { target: { value: "maior que"} });

    const filterNumber = screen.getByTestId(/value-filter/i);
    userEvent.type(filterNumber, '1000000');

    const buttonFilter = screen.getByTestId(/button-filter/i);
    userEvent.click(buttonFilter);

    expect(await screen.findAllByRole('row')).toHaveLength(7);
  });

  it('Teste se o Filtro Menor Que < Funciona Corretamente', async () => {
    fireEvent.change(screen.getByTestId('comparison-filter'), { target: { value: "menor que"} });

    const filterNumber = screen.getByTestId('value-filter');
    userEvent.type(filterNumber, '1000000');

    const buttonFilter = screen.getByTestId('button-filter');
    userEvent.click(buttonFilter);

    expect(await screen.findAllByRole('row')).toHaveLength(3);
  });


  it('Teste a mudança de filtros', async () => {
    const filtro = screen.getByTestId(/name-filter/i);
    userEvent.type(filtro, 'oo');
    expect(await screen.findAllByRole('row')).toHaveLength(3);
  });
});
