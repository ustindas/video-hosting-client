import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRouts, publicRouts} from "../utils/routes";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";
import {useAppSelector} from "../hooks/redux";

const AppRouter = () => {
    const {isAuthorized} = useAppSelector(state => state.userReducer)
    return (
        <div style={{paddingTop:84,height: "100vh",width: "100vw"}}>
            <Routes>
                {
                    isAuthorized && authRouts.map(({path, Component}) =>
                        <Route key={path}
                               path={path}
                               element={<Component/>}/>
                    )
                }
                {
                    publicRouts.map(({path, Component}) =>
                        <Route key={path}
                               path={path}
                               element={<Component/>}/>
                    )
                }
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;