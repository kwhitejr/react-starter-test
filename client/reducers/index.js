import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
// import counter from 'reducers/counter';
// import todo from 'reducers/todo';

const rootReducer = combineReducers({
  routing,
  form: formReducer,
});

export default rootReducer;
