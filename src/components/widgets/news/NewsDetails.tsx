import React from 'react';
import { useSelector } from 'react-redux'

const NewsDetails = () => {
    const newsList = useSelector(state => state.news);

    if (newsList && newsList.articles && newsList.articles.length > 0) {
        const articles = newsList.articles
        return (
            <div>
                {articles.map((el, i) => {
                    return <div key={i}>
                        <p>{el.title}</p>
                        <p>Author: {el.author}</p>
                        <p>
                            <a href={el.url} target="_blank">{el.source}</a>
                        </p>
                        <hr />
                    </div>
                })}
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default NewsDetails;