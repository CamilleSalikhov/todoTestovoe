import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware  } from 'redux';
import todoReducer from './reducers/todoReducer';
import { getLocalStorage } from './localStorage';
import thunk from 'redux-thunk';







const middleware = [thunk];

const rootReducer = combineReducers({
    todos:todoReducer
});

const persistState = getLocalStorage();

const store = createStore(rootReducer, persistState,
    compose(
        applyMiddleware(...middleware),
         

    )
     
     
     );



export default store;