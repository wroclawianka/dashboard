import news from "../apis/newsapi";

import { FETCH_NEWS } from './types'

export const fetchTopHeadlines = () => async dispatch => {
    let params = {
        country: 'pl',
        category: 'business',
        page: 0,
        pageSize: 5,
        apiKey: '1afab476e7894990baec610cf83edacd'
    }
    const response = await news.get('/top-headlines', { params });
    dispatch({ type: FETCH_NEWS, payload: response.data })
};
