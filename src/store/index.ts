import { combineReducers} from 'redux';
import globalsReducer from './globals/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  globalsReducer,
  userReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
