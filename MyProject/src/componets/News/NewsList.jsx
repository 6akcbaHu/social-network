import React, {useEffect, useState} from "react";
import * as axios from "axios";
import NewsItem from "./NewsItem";
import s from "./NewsItem.module.css"

const News = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=a666a87ac2d74a2983f5e3e128e8f01b")
            setArticles(res.data.articles)
console.log(res.status)
        }
        getArticles()
    }, []);
    return (<div className={s.news}>
            {articles.map(({title, description, url, urlToImage}) =>
                <NewsItem title={title}
                          key={url}
                          description={description}
                          url={url}
                          urlToImage={urlToImage}
                />)}
        </div>
    )
}

export default News