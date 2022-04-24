import React from "react";
import Header from "../Header";
import MainBody from "./MainBody";
import '../../styles/components/main-container/Main.scss';



function MainContainer() {
    return (
        <div className="main">
            <div className="container">
                <Header />
                <MainBody />
            </div>

        </div>
    );
}

export default MainContainer;