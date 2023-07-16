import { legacy_createStore as createStore, combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import reducer from './reducers/index'

const store = createStore(
  reducer,
  composeWithDevTools()
);
 
export default store