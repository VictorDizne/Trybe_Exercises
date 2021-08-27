import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './redux/reducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

test('Button usage', () => {
  const { queryByText } = renderWithRedux(<App />)
  const btn = queryByText('Oi, eu sou um butao')

  expect(btn).toBeInTheDocument();
  expect(queryByText('0')).toBeInTheDocument();

  fireEvent.click(btn)

  expect(queryByText('0')).not.toBeInTheDocument();
  expect(queryByText('1')).toBeInTheDocument();
});

test('Page behavior with starting state', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
  const btn = queryByText('Oi, eu sou um butao')

  expect(btn).toBeInTheDocument();
  expect(queryByText('0')).not.toBeInTheDocument();
  expect(queryByText('5')).toBeInTheDocument();

  fireEvent.click(btn)

  expect(queryByText('5')).not.toBeInTheDocument();
  expect(queryByText('6')).toBeInTheDocument();
});
