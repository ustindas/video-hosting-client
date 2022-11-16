import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {Global} from "./components/styles/global";

const store = setupStore()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
);

