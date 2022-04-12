import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

export type RootState = ReturnType<typeof store.getState>;

const isProd = process.env.NODE_ENV === 'produiction';

const middlewares = [thunk];
const enhancers = isProd
  ? applyMiddleware(...middlewares)
  : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancers);

export default store;
