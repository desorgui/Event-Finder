import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import Event from '../Event';

function renderWithProviders(
  ui,
  {
    storetest = store,
    ...renderOptions
  } = {},
) {
    function Wrapper({ children }) { // eslint-disable-line
    return <Provider store={storetest}>{children}</Provider>;
  }
  return { storetest, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

const event = {
  id: 'Z7r9jZ1AdFYe3',
  name: 'Los Angeles Dodgers vs. San Diego Padres',
  localDate: '2022-08-05',
  localTime: '19:10:00',
  image: 'https://s1.ticketm.net/dam/a/2f4/5f8bca36-3127-4f87-b573-3dd6485642f4_1344231_RETINA_PORTRAIT_3_2.jpg',
  classification: 'Sports',
  priceRanges: 'undefined',
};

it('Event renders information correctly', () => {
  renderWithProviders(<Event {...event} />); // eslint-disable-line
  expect(screen.getByText('Los Angeles Dodgers vs. San Diego Padres')).toBeInTheDocument();
});

test(' Test the snapshot', () => {
  expect(screen.debug()).toMatchSnapshot();
});
