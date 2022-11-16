import React from 'react';
import Header from "./components/headerComponent/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </>
    )
}
export default App;
