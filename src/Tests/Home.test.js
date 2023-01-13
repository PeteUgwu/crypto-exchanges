import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import Home from '../Pages/Home';
import renderWithProviders from '../Redux/Exchange/Exchange-test-utils';

it('snapshots', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('heading inside home component', async () => {
  renderWithProviders(
    <Router>
      <Home />
    </Router>,
  );

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/crypto-exchanges/i)).toBeInTheDocument();
});
