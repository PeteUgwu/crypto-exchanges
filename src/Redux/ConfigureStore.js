import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from './Exchange/Exchange.js';


const store = configureStore({
  reducer: {
    Exchanges: exchangeReducer,
  },
});

export default store;