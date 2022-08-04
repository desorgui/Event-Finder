import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getUrl = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*';

const FETCHED_EVENT = 'FETCHED_EVENT';

export const getEvents = createAsyncThunk(
  FETCHED_EVENT,
  async () => {
    const eventArr = [];
    await fetch(getUrl).then((events) => events.json())
      .then((res) => {
        const { events } = res._embedded; // eslint-disable-line
        events.forEach((event) => {
          const {
            id, name, dates, images, classifications,
          } = event;
          let { priceRanges } = event;
          if (!priceRanges) {
            priceRanges = 'undefined';
          }
          eventArr.push({
            id,
            name,
            localDate: dates.start.localDate,
            localTime: dates.start.localTime,
            image: images[5].url,
            classification: classifications[0].segment.name,
            priceRanges,
          });
        });
      });
    return (eventArr);
  },
);

const eventSlice = createSlice({
  name: 'events',
  initialState: [],
  extraReducers: {
    [getEvents.fulfilled]: (state, action) => action.payload,
  },
});

export default eventSlice.reducer;
