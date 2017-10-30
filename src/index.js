import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import AppContainer from "./container/AppContainer";

let store=createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root'));
registerServiceWorker();



