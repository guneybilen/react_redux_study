import { FETCH_POSTS } from './../actions/index';

/////////////////////////////////////////////////
//
// except the console.log lines, with the other 
// commented out lines the program was not working
// properly. The index page was not listing any
// posts.
//  
/////////////////////////////////////////////////

// const INITIAL_STATE = { all: [], posts: null};

//export default function(state = INITIAL_STATE, action) {

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_POSTS:
          // console.log("state", state);
          // console.log("action", action);
          // return { ...state, all: action.payload.data }
          return action.payload.data 
        default:
          return state
    }
}