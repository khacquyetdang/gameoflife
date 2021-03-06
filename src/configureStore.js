import gameOfLife from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


export default function configureStore(){

  var middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production')
  {
    middlewares.push(createLogger());
  }

  var store = createStore(gameOfLife,
      //persistedState,
      applyMiddleware(...middlewares)
  );

  store.subscribe(() => {
    //updateLocalStorage(store.getState());
  });

  return store;
}
