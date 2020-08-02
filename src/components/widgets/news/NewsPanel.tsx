import React, { useEffect } from 'react';
import { useSelector, useDispatch, useState } from 'react-redux'

import NewsDetails from './NewsDetails'

import { fetchTopHeadlines as fetchNews } from '../../../actions'

const NewsPanel = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchNews()) }, []);

    return <NewsDetails />
}

export default NewsPanel;