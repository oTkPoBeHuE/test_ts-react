import React from 'react';
import { createStore, combineReducers } from 'redux';
// @ts-ignore
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';

// @ts-ignore
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { reduxStore } from './store/createStore';
import { MainPage } from './pages/mainPage';
import { SecondPage } from './pages/secondPage';


const store = createStore(
  combineReducers({
    ...reduxStore,
    routing: routerReducer
  })
)


const history = syncHistoryWithStore(browserHistory, store)

const App: React.FC = () => {
  return (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
        <Route path="foo" component={MainPage}/>
        <Route path="bar" component={SecondPage}/>
      </Route>
    </Router>
    <MainPage />
  </Provider>);
}

export default App;
