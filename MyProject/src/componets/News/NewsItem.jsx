import React from "react";
import s from './NewsItem.module.css'

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        // <div className={s.news}>
            <div className={s.item}>
                <img src={urlToImage}/>
                <h3 className={s.title}><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        // </div>
    )
}
export default NewsItem