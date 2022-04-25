import React from "react";
import Logo from './Logo';
import '../../styles/components/sidebar/Sidebar.scss';
import MainMenu from "./MainMenu";
import SidebarButtons from './SidebarButtons'

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo />
            <MainMenu />
            <SidebarButtons />
        </div>
    );
}

export default Sidebar;