import React from "react";
import Main from "./components/main-container/Main";
import Sidebar from "./components/sidebar/Sidebar";
import './styles/App.scss';
function App() {
    return (
        <div className="wrapper">
            <div className="app">
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}
export default App;
