import React from 'react';
import { useSelector } from 'react-redux'

const NewsDetails = () => {
    const newsList = useSelector(state => state.news);

    if (newsList && newsList.articles && newsList.articles.length > 0) {
        const articles = newsList.articles
        return (
            <div>
                {articles.map((el, i) => {
                    return <li key={i}>{el.title}</li>
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