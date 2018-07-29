import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import UserReducer from './UserReducer';
import SurveyReducer from './SurveyReducer';

export default () => {
    const store = createStore(
        combineReducers({
            user: UserReducer,
            surveys: SurveyReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};