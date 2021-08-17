import Photo from "../../images/404.png"
import s from "./error.module.css"
const Error404=()=>{
    return(
        <div className={s.error}>
            <img src={Photo} alt=""/>
        </div>
    )
}

export default Error404;