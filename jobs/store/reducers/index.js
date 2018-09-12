import { combineReducers } from 'redux';
import auth from './auth';
import jobs from './job';

export default combineReducers({
  auth, jobs
});