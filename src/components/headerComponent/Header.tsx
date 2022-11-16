import React from "react";
import SearchInput from "../searchInputComponent/SearchInputComponent";
import Logotype from "../logotypeComponent/Logotype";
import "./header.css"
import UserNavigateComponent from "./user-navigate/UserNavigateComponent";

const Header = () => {
    return <>
        <div className="header">
            <Logotype/>
            <div className={"header-block"}>
                <div className="left-part-block-header">
                    <SearchInput/>
                </div>
            <UserNavigateComponent/>
            </div>
        </div>
    </>
}

export default Header