import {combineReducers} from 'redux';
import issues from './issues';
import comments from './comments';

const rootReducer = combineReducers({
  issues,
  comments
});

export default rootReducer;
