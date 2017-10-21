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

#### Start the webapp

The app was build using create-react-app so it uses it's standard scripts. In a separate terminal window start mongod by running the following command.

```
$ npm run start
```
Make sure no other clients are accessing the 9090 port. If they are locate the processes and stop them.

#### Visually navigating the Frontend

In the browser navigate to http://localhost:9090/ and follow the UI cues. 

## Running the tests

The tests are built using Jest and Moxios

To run the tests, type the following command in your terminal anywhere withing the project folder

```
$ npm test
```

The test available: 
- all Redux actions
- individual Redux reducers tests: article, articles, comments, topics

### Actions Testing patterns

fetchCommentsRequest() SYNC action

```javascript
describe('fetchCommentsRequest', () => {
    test('returns \'FETCH COMMENTS REQUEST\'', () => {
      expect(actions.fetchCommentsRequest()).toEqual({
        type: 'FETCH COMMENTS REQUEST'
      });
    });
  });
```

fetchComments() ASYNC action

```javascript
describe('fetchComments ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });
    test('returns correct series of actions and payload if succesful', () => {
      const articleId = '594b9910c8f51a1e1b7f4243';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            comments: ['a bunch of comments']
          }
        });
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
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
```

### Reducers Testing patterns

fetchArticleById() article.reducer.js

```javascript
describe('fetchArticleById', () => {
    test('add one article to the new state', () => {
      const action = actions.fetchArticleByIdSuccess({
        article: { title: 'test article' }
      });
      const newState = reducer(initialState, action);
      expect(typeof newState.articleById).toBe('object');
      expect(newState.articleById).toEqual({ title: 'test article' });
    });
    test('changes the loading property in the new state', () => {
      const action = actions.fetchArticleByIdRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchArticleByIdFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
```

### React Testing

I skipped React rendering tests at this stage because I broke up the components into presentation and container componenets:
- presentational: render data to html
- container: fetches data and manages state

Because of this structure the action and reducer tests were enough to make sure that the containers where fetching data correctly. I used prop type validation to make sure that the state is mapped and passed down correctly. Presentational component were kept simple so as to avoid any rendering mishaps.

## File Structure

    ├── .DS_Store
    ├── .babelrc
    ├── .eslintrc
    ├── README.md
    ├── package.json
    ├── public
    |  ├── index.html
    |  └── manifest.json
    ├── src
    |  ├── Root.js
    |  ├── actions
    |  |  ├── actions.js
    |  |  └── types.js
    |  |  ├── actions.test.js
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
    |  ├── config.js
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
    |     ├── article.reducer.test.js
    |     ├── articles.reducer.js
    |     ├── articles.reducer.test.js
    |     ├── comments.reducer.js
    |     ├── comments.reducer.test.js
    |     ├── index.js
    |     ├── topics.reducer.js
    |     └── topics.reducer.test.js


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
* [Husky](https://github.com/typicode/husky) - Git hooks made easy, used to chain linting and tests before commits
* [Jest](https://facebook.github.io/jest/) - Javascript Testing solution
* [ESLint + JSX, React, Jest plugins](http://eslint.org) - Linting utility
* [Prettier](https://www.npmjs.com/package/prettier) - Code formater, used to enforce linting at save
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Moxiox](https://www.npmjs.com/package/moxios) - Mock axios requests for testing
* [Redux Mock Store](https://www.npmjs.com/package/redux-mock-store) - Mock store for testing Redux
* [Redux Thunk](https://www.npmjs.com/package/redux-thunk) - Redux thunk middleware


## Authors

* **Alan Ionita** - https://github.com/alanionita

## Acknowledgments

React, Redux, and the magical webpack 🙌