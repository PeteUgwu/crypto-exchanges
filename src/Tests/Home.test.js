import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/ConfigureStore';
import Home from '../Pages/Home';

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
