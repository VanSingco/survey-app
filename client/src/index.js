import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configStore from './reducer/configStore';
import AppRoute from './router/AppRoute';
import registerServiceWorker from './registerServiceWorker';
// styling
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './sass/main.css';
import '@fortawesome/fontawesome-free/css/all.css';


const store = configStore();

const App = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
)

ReactDOM.render(App , document.getElementById('root'));
registerServiceWorker();

