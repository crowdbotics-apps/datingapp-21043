import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2125235Reducer from '../features/SignIn2125235/redux/reducers'
import SignIn2125149Reducer from '../features/SignIn2125149/redux/reducers'
import SignIn2125073Reducer from '../features/SignIn2125073/redux/reducers'
import SignIn2125059Reducer from '../features/SignIn2125059/redux/reducers'
import SignIn2125045Reducer from '../features/SignIn2125045/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2125235: SignIn2125235Reducer,
SignIn2125149: SignIn2125149Reducer,
SignIn2125073: SignIn2125073Reducer,
SignIn2125059: SignIn2125059Reducer,
SignIn2125045: SignIn2125045Reducer,

});