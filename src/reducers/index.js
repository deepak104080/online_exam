import { combineReducers } from 'redux';
import reducer_users from './reducer_users';
import reducers_qs from './reducer_qs';

const rootReducer = combineReducers({
  store_users: reducer_users,
  store_qs: reducers_qs,
});

export default rootReducer;
