/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// action type
const FETCH_ALL_EXCHANGES = 'Exchange/Exchange/FETCH_ALL_EXCHANGES';
const BASE_URL = 'https://api.coingecko.com/api/v3/exchanges';

// reducer
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_ALL_EXCHANGES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

// action creator
export const fetchExchanges = createAsyncThunk(FETCH_ALL_EXCHANGES,
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  });
