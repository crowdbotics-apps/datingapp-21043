import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2125059Reducer from '../features/SignIn2125059/redux/reducers'
import SignIn2125045Reducer from '../features/SignIn2125045/redux/reducers'
import SignIn41125042Reducer from '../features/SignIn41125042/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2125059: SignIn2125059Reducer,
SignIn2125045: SignIn2125045Reducer,
SignIn41125042: SignIn41125042Reducer,

});