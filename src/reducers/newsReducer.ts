import { FETCH_NEWS } from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            const data = parseNews(action.payload);
            return { ...{ articles: data } };
        default:
            return state;
    }
};

function parseNews(payload: any) {
    if (payload.status === 'ok') {
        const articleList = payload.articles
        if (articleList && Array.isArray(articleList)) {
            articleList.forEach((el, i, arr) => {
                arr[i] = parseArticle(el)
            })
            return articleList
        } else {
            console.error('NewsAPI: No articles send')
            return []
        }
    } else {
        console.error('NewsApI: Issue to fetch articles');
        return [];
    }
}

function parseArticle(article: any) {
    return {
        title: article.title,
        author: article.author,
        source: (article.source) ? article.source.name : undefined,
        url: article.url,
    }
}