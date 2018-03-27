import { combineReducers } from 'redux';
import PostsReducer from './reducers_posts';
import { reducer as formReducer } from 'redux-form';

// "make sure you use form as a key name for the formReducer value below."
 
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});


export default rootReducer;
