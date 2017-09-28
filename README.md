# Hacker News Frontend clone

My own interpretation of the Hacker News Frontend using React and Redux.

![screencast of the app](http://g.recordit.co/fpqXeb1dps.gif "App screencast")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

#### node.js

node.js must be installed on your machine (any versions will work; v7.10.0 was used for this project)

```
$ node -v // v7.10.0
```

To install node follow this guide -  https://nodejs.org/en/download/package-manager/#osx

#### npm

npm is required (any versions will work; v4.2.0 was used for this project)

```
$ npm -v // 4.2.0
```

To install npm follow this guide - https://docs.npmjs.com/getting-started/installing-node

#### The Hacker New Clone API 

Which you can find here https://github.com/alanionita/hacker-news-API-clone

### Install

Create a new folder on your machine and clone / fork + clone the repo. 

Open terminal and navigate to the folder storing the code

Install all of the required packages using npm

```
$ npm i  
```

### Start the app

#### Start the API 

Use the start instructions fron the API page and make sure the api is running - test it in the browser.

#### Start webpack 

In a separate terminal window start mongod by running the following command.

```
$ npm run dev
```
Make sure no other clients are accessing the 9090 port. If they are locate the processes and stop them.

#### Visually navigating the Frontend

In the browser navigate to http://localhost:9090/ and follow the UI cues. 

## Running the tests

The tests are built using Mocha, Chai, and Supertest

To run the tests, type the following command in your terminal anywhere withing the project folder

```
$ npm t
```

The test available: 
- all Redux actions
- individual Redux reducers tests: article, articles, comments, topics

### Actions Testing patterns

fetchCommentsRequest() SYNC action

```javascript
describe('fetchCommentsRequest', () => {
    it('returns \'FETCH COMMENTS REQUEST\'', () => {
    expect(actions.fetchCommentsRequest()).to.eql({
        type: 'FETCH COMMENTS REQUEST'
    });
    });
});
```

fetchComments() ASYNC action

```javascript
describe('fetchComments ASYNC', () => {
    beforeEach(() => {
    nock.disableNetConnect();
    });

    afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
    });
    it('returns correct series of actions and payload if succesful', () => {
    const articleId = '594b9910c8f51a1e1b7f4243';
    nock('http://localhost:3000/api')
        .get(`/articles/${articleId}/comments`)
        .reply(200, {
        comments: ['a bunch of comments']
        });

    const store = mockStore({
        comments: []
    });

    const expectedActions = [
        { type: types.FETCH_COMMENTS_REQUEST },
        {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: ['a bunch of comments']
        }
    ];
    return store.dispatch(actions.fetchComments(articleId)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
    });
    });
});
```

### Reducers Testing patterns

fetchArticleById() article.reducer.js

```javascript
describe('fetchArticleById', () => {
    it('add one article to the new state', () => {
      const action = actions.fetchArticleByIdSuccess({
        article: { title: 'test article' }
      });
      const newState = reducer(initialState, action);
      expect(newState.articleById).to.be.an('object');
      expect(newState.articleById).to.eql({ title: 'test article' });
    });
    it('changes the loading property in the new state', () => {
      const action = actions.fetchArticleByIdRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).to.be.true;
    });
    it('returns the error if it fails', () => {
      const action = actions.fetchArticleByIdFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).to.eql('error');
    });
});
```

### React Testing

I skipped React testing at this stage because I broke up the components into presentation and container componenets:
- presentational: render data to html
- container: fetches data and manages state

Becuase of this structure the action and reducer test were enough to make sure that the contianers where fetching the correct data. I used prop type validation to make sure that the state is mapped and passed down correctly.

## File Structure

    ├── .DS_Store
    ├── .babelrc
    ├── .eslintrc
    ├── README.md
    ├── config.js
    ├── out.txt
    ├── package-lock.json
    ├── package.json
    ├── public
    |  └── index.html
    ├── spec
    |  ├── actions.spec.js
    |  ├── article.reducer.spec.js
    |  ├── articles.reducer.spec.js
    |  ├── comments.reducer.spec.js
    |  └── topics.reducer.spec.js
    ├── src
    |  ├── Root.js
    |  ├── actions
    |  |  ├── actions.js
    |  |  └── types.js
    |  ├── components
    |  |  ├── containers
    |  |  |  ├── AppContainer.js
    |  |  |  └── ArticlePageContainer.js
    |  |  └── presentational
    |  |     ├── App.js
    |  |     ├── ArticleCardFull.js
    |  |     ├── ArticleCardMini.js
    |  |     ├── ArticleList.js
    |  |     ├── ArticlePage.js
    |  |     ├── ArticleVotingSegment.js
    |  |     ├── CommentAdd.js
    |  |     ├── CommentCard.js
    |  |     ├── CommentList.js
    |  |     ├── CommentVotingSegment.js
    |  |     ├── Navbar.js
    |  |     ├── TopicsFilterLink.js
    |  |     └── TopicsSubNav.js
    |  ├── css
    |  |  ├── bulma.css
    |  |  └── font-awesome.css
    |  ├── fonts
    |  |  ├── FontAwesome.otf
    |  |  ├── fontawesome-webfont.eot
    |  |  ├── fontawesome-webfont.svg
    |  |  ├── fontawesome-webfont.ttf
    |  |  ├── fontawesome-webfont.woff
    |  |  └── fontawesome-webfont.woff2
    |  ├── helpers
    |  |  └── secondsToTimeString.js
    |  ├── index.js
    |  └── reducers
    |     ├── article.reducer.js
    |     ├── articles.reducer.js
    |     ├── comments.reducer.js
    |     ├── index.js
    |     └── topics.reducer.js
    └── webpack.config.js


## Built With

### Dependencies
* [Prop-types](https://www.npmjs.com/package/prop-types) - React prop type validation
* [React](https://www.npmjs.com/package/react) - JS library for building UIs
* [React DOM](https://www.npmjs.com/package/react-dom) - React package for working with the DOM
* [React Redux](https://www.npmjs.com/package/react-redux) - React bindings for Redux
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router v4
* [React Router Redux](https://www.npmjs.com/package/react-router-redux) - Redux bindings for React Router
* [React Spinkit](https://www.npmjs.com/package/react-spinkit) - A collection of loading indicators animated with CSS for React
* [Redux](https://www.npmjs.com/package/redux) - State container for React Apps
* [Redux Logger](https://www.npmjs.com/package/redux-logger) - Logger for Redux
* [Redux Form](https://redux-form.com) - A better way to manage your form state in Redux

### Dev Dependencies
* (global)[Mocha](https://mochajs.org) - Javascript test framework
* (global)[Chai](http://chaijs.com/guide/) - Test assertion library
* [Husky](https://github.com/typicode/husky) - Git hooks made easy, used to chain linting and tests before commits
* [ESLint + JSX, React plugins](http://eslint.org) - Linting utility
* [Prettier](https://www.npmjs.com/package/prettier) - Code formater, used to enforce linting at save
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Babel Core, Loader, es2015 and React presets](https://babeljs.io) - JS compiler
* [Nock](https://www.npmjs.com/package/nock) - HTTP Server mocking for Node.js
* [Redux Mock Store](https://www.npmjs.com/package/redux-mock-store) - Mock store for testing Redux
* [Redux Thunk](https://www.npmjs.com/package/redux-thunk) - Redux thunk middleware
* [Webpack](https://www.npmjs.com/package/webpack) - webpack, the magical unicorn
* [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) - webpack server that updates browser on changes
* [File Loader](https://www.npmjs.com/package/file-loader) - File Loader module for webpack
* [CSS Loader](https://www.npmjs.com/package/css-loader) - CSS module for webpack
* [URL Loader](https://www.npmjs.com/package/url-loader) - URL Loader module for webpack
* [Style Loader](https://www.npmjs.com/package/style-loader) - Style Loader module for webpack

## Authors

* **Alan Ionita** - https://github.com/alanionita

## Acknowledgments

React, Redux, and the magical webpack 🙌