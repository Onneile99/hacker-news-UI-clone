import * as types from './types';

import axios from 'axios';
import {ROOT} from '../../config';

// ARTICLES 
export function fetchArticles () {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        return axios.get(`${ROOT}/articles`)
            .then(res => {
                dispatch(fetchArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchArticlesFailed(err));
            });
    };
}

export function fetchArticlesRequest () {
    return {
        type: types.FETCH_ARTICLES_REQUEST
    };
}

export function fetchArticlesSuccess (articles) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: articles
    };
}

export function fetchArticlesFailed (err) {
    return {
        type: types.FETCH_ARTICLES_FAILED,
        payload: err
    };
}

export function fetchArticleByIdRequest () {
    return {
        type: types.FETCH_ARTICLE_BY_ID_REQUEST
    };
}

export function fetchArticleByIdSuccess (articles) {
    return {
        type: types.FETCH_ARTICLE_BY_ID_SUCCESS,
        payload: articles
    };
}

export function fetchArticleByIdFailed (err) {
    return {
        type: types.FETCH_ARTICLE_BY_ID_FAILED,
        payload: err
    };
}

// TOPICS
export function fetchTopics () {
    return function (dispatch) {
        dispatch(fetchTopicsRequest());
        return axios.get(`${ROOT}/topics`)
            .then(res => {
                dispatch(fetchTopicsSuccess(res.data.topics));
            })
            .catch(err => {
                dispatch(fetchTopicsFailed(err));
            });
    };
}

export function fetchTopicsRequest () {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}

export function fetchTopicsSuccess (topics) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        payload: topics
    };
}

export function fetchTopicsFailed (err) {
    return {
        type: types.FETCH_TOPICS_FAILED,
        payload: err
    };
}

export function fetchTopicArticlesRequest () {
    return {
        type: types.FETCH_TOPIC_ARTICLES_REQUEST
    };
}

export function fetchTopicArticlesSuccess (articles) {
    return {
        type: types.FETCH_TOPIC_ARTICLES_SUCCESS,
        payload: articles
    };
}

export function fetchTopicArticlesFailed (err) {
    return {
        type: types.FETCH_TOPIC_ARTICLES_FAILED,
        payload: err
    };
}

export function fetchTopicArticles (id) {
    return function (dispatch) {
        dispatch(fetchTopicArticlesRequest());
        return axios.get(`${ROOT}/topics/${id}/articles`)
            .then(res => {
                dispatch(fetchTopicArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchTopicArticlesFailed(err));
            });
    };
}