import thunkMiddleware from 'redux-thunk';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { 
  Router, 
  Route,
  hashHistory
} from 'react-router';

import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from './model';

import App from './components/app';
import { Restaurants } from './components/restaurants';
import { NewRestaurant } from './components/newRestaurant';
import { EditRestaurant } from './components/editRestaurant';
import { NewRestaurantVisit } from './components/newRestaurantVisit';
import { EditRestaurantVisit } from './components/editRestaurantVisit';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/restaurants' component={Restaurants} />
      <Route path='/newRestaurant' component={NewRestaurant} />
      <Route path='/editRestaurant' component={EditRestaurant} />
      <Route path='/newRestaurantVisit' component={NewRestaurantVisit} />
      <Route path='/editRestaurantVisit' component={EditRestaurantVisit} />
    </Router>
  </Provider>,
  document.getElementById('content') as HTMLElement,
);
