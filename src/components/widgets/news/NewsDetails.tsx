import React from 'react';
import { useSelector } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            textAlign: 'left',
            paddingBottom: '12px',
        },
        root: {
            margin: '0 auto',
            color: '#02005c',
        },
        article: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '12px',
            textAlign: 'left',
        },
        link: {
            color: 'inherit',
            textDecoration: 'none',
            "&:hover": {
                textDecoration: 'underline',
            },
        },
        source: {
            color: '#a2a2a2'
        },
    }),
);

const NewsDetails = () => {
    const classes = useStyles();
    const newsList = useSelector(state => state.news);

    const renderTitle = () => {
        return (
            <Grid className={classes.title}>
                <Typography variant="h5">
                    News
            </Typography>
            </Grid>
        )
    }

    const parseArticleTitle = (title, source) => {
        const space = (title.length < 60) ? (title.length - source.length + 20) : 60
        return (title.length > space) ? `${title.substring(0, space)}...` : title
    }

    const renderArticle = (article, index) => {
        return <Grid key={index} className={classes.article}>
            <p>
                <a href={article.url} className={classes.link} target="_blank">
                    {parseArticleTitle(article.title, article.source)}
                </a>
                <span className={classes.source}>
                    {` ― ${article.source}`}
                </span>
            </p>
        </Grid>
    }

    const renderArticles = () => {
        const areArticles = newsList && newsList.articles && newsList.articles.length > 0;
        if (areArticles) {
            return <Grid>{newsList.articles.map((el, i) => renderArticle(el, i))}</Grid>
        } else {
            { renderLoading() }
        }
    }

    const renderLoading = () => {
        return <div>Loading...</div>
    }

    return (
        <Box className={classes.root}>
            <Grid container justify="space-evenly" direction="column">
                {renderTitle()}
                {renderArticles()}
            </Grid>
        </Box>
    )
};

export default NewsDetails;