import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reducer, { fetchExchanges } from '../Redux/Exchange/Exchange';

test('Array of exchanges added tothe state', () => {
  const previousState = [];
  const action = { type: 'Exchange/Exchange/FETCH_ALL_EXCHANGES/fulfilled', payload: [{ id: 1, name: 'Binance', trust_score_rank: 1 }] };

  expect(reducer(previousState, action)).toEqual([
    { id: 1, name: 'Binance', trust_score_rank: 1 },
  ]);
});

// Testing the action creators.
describe('shoud dispatch get all exchanges action', () => {
  it('should pass', async () => {
    const BASE_URL = 'https://api.coingecko.com/api/v3/exchanges';
    const exchanges = { data: { data: [{ exchangeId: 'binance', name: 'Binance', trust_score_rank: 1 }] } };

    const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(exchanges);
    const store = configureStore({
      reducer(state = [], action) {
        switch (action.type) {
          case 'Exchange/Exchange/FETCH_ALL_EXCHANGES/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchExchanges());
    expect(postSpy).toBeCalledWith(BASE_URL);
    const state = store.getState();
    expect(state).toEqual({ data: [{ exchangeId: 'binance', name: 'Binance', trust_score_rank: 1 }] });
  });
});
