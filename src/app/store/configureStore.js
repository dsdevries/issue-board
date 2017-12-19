import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import {fetchIssues} from '../actions/index';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

  store.dispatch(fetchIssues());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
