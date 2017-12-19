import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Main from './app/containers/Main';
import Detail from './app/containers/Detail';
import configureStore from './app/store/configureStore';
import {HashRouter, Switch, Route, browserHistory} from 'react-router-dom';

const store = configureStore();

render(
  <Provider store={store}>
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/issue/:item" component={Detail}/>
        </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
