import * as types from './types';
import axios from 'axios';

const API_URL = 'https://hacker-news-api-clone.herokuapp.com/api';

// ARTICLES 
export function fetchArticles () {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        return axios.get(`${API_URL}/articles`)
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

export function fetchArticleById (id) {
    return function (dispatch) {
        dispatch(fetchArticleByIdRequest());
        return axios.get(`${API_URL}/articles/${id}`)
            .then(res => {
                dispatch(fetchArticleByIdSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchArticleByIdFailed(err));
            });
    };
}

export function alterArticleVotesRequest () {
    return {
        type: types.ALTER_ARTICLE_VOTES_REQUEST
    };
}

export function alterArticleVotesSuccess (article) {
    return {
        type: types.ALTER_ARTICLE_VOTES_SUCCESS,
        payload: article
    };
}

export function alterArticleVotesFailed (err) {
    return {
        type: types.ALTER_ARTICLE_VOTES_FAILED,
        payload: err
    };
}


export function alterArticleVotes (articleId, vote) {
    return function (dispatch) {
        dispatch(alterArticleVotesRequest());
        return axios.put(`${API_URL}/articles/${articleId}?vote=${vote}`, {})
            .then(res => {
                dispatch(alterArticleVotesSuccess(res.data));
            })
            .catch(err => {
                dispatch(alterArticleVotesFailed(err));
            });
    };
}

// TOPICS
export function fetchTopics () {
    return function (dispatch) {
        dispatch(fetchTopicsRequest());
        return axios.get(`${API_URL}/topics`)
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
        return axios.get(`${API_URL}/topics/${id}/articles`)
            .then(res => {
                dispatch(fetchTopicArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchTopicArticlesFailed(err));
            });
    };
}

// COMMENTS 

export function fetchCommentsRequest () {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    };
}

export function fetchCommentsSuccess (comments) {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: comments
    };
}

export function fetchCommentsFailed (err) {
    return {
        type: types.FETCH_COMMENTS_FAILED,
        payload: err
    };
}


export function fetchComments (articleId) {
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        return axios.get(`${API_URL}/articles/${articleId}/comments`)
            .then(res => {
                dispatch(fetchCommentsSuccess(res.data.comments));
            })
            .catch(err => {
                dispatch(fetchCommentsFailed(err));
            });
    };
}

export function alterCommentVotesRequest () {
    return {
        type: types.ALTER_COMMENT_VOTES_REQUEST
    };
}

export function alterCommentVotesSuccess (comment) {
    return {
        type: types.ALTER_COMMENT_VOTES_SUCCESS,
        payload: comment
    };
}

export function alterCommentVotesFailed (err) {
    return {
        type: types.ALTER_COMMENT_VOTES_FAILED,
        payload: err
    };
}


export function alterCommentVotes (commentId, vote) {
    return function (dispatch) {
        dispatch(alterCommentVotesRequest());
        return axios.put(`${API_URL}/comments/${commentId}?vote=${vote}`, {})
            .then(res => {
                dispatch(alterCommentVotesSuccess(res.data));
            })
            .catch(err => {
                dispatch(alterCommentVotesFailed(err));
            });
    };
}

export function addCommentRequest () {
    return {
        type: types.ADD_COMMENT_REQUEST
    };
}

export function addCommentSuccess (comment) {
    return {
        type: types.ADD_COMMENT_SUCCESS,
        payload: comment
    };
}

export function addCommentFailed (err) {
    return {
        type: types.ADD_COMMENT_FAILED,
        payload: err
    };
}


export function addComment (articleId, input) {
    return function (dispatch) {
        dispatch(addCommentRequest());
        return axios.post(`${API_URL}/articles/${articleId}/comments`, input)
            .then(res => {
                dispatch(addCommentSuccess(res.data));
            })
            .catch(err => {
                dispatch(addCommentFailed(err));
            });
    };
}

export function deleteCommentRequest () {
    return {
        type: types.DELETE_COMMENT_REQUEST
    };
}

export function deleteCommentSuccess (comment) {
    return {
        type: types.DELETE_COMMENT_SUCCESS,
        payload: comment
    };
}

export function deleteCommentFailed (err) {
    return {
        type: types.DELETE_COMMENT_FAILED,
        payload: err
    };
}


export function deleteComment (commentId, user) {
    return function (dispatch) {
        dispatch(deleteCommentRequest());
        return axios.delete(`${API_URL}/comments/${commentId}?user=${user}`)
            .then(res => {
                dispatch(deleteCommentSuccess(res.data));
            })
            .catch(err => {
                dispatch(deleteCommentFailed(err));
            });
    };
}