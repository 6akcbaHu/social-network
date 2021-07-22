import React from "react";
import s from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.loader}>
                <span>Загрузка...</span>
            </div>
        </div>
    )
}
export default Preloader;