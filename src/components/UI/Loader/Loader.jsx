import React from "react";
import cl from "./Loader.module.scss"


const Loader = () => {
    return (
        <div className={cl.loader}>
            <span className={cl.span}></span>
            <span className={cl.span}></span>
            <span className={cl.span}></span>
        </div>
    )
}
export default Loader;