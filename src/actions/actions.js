import * as types from './types';

import axios from 'axios';
import {ROOT} from '../../config';


export function fetchArticles () {
    return function (dispatch) {
        dispatch(fetchArticleRequest());
        return axios.get(`${ROOT}/articles`)
            .then(res => {
                dispatch(fetchArticleSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchArticleFailed(err));
            });
    };
}

export function fetchArticleRequest () {
    return {
        type: types.FETCH_ARTICLE_REQUEST
    };
}

export function fetchArticleSuccess (articles) {
    return {
        type: types.FETCH_ARTICLE_SUCCESS,
        payload: articles
    };
}

export function fetchArticleFailed (err) {
    return {
        type: types.FETCH_ARTICLE_FAILED,
        payload: err
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
