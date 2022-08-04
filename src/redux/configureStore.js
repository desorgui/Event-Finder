import { configureStore, combineReducers } from '@reduxjs/toolkit';

import eventSlice from './events';

const reducer = combineReducers(
  {
    events: eventSlice
  },
);
const store = configureStore({ reducer });
export default store;
