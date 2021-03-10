# Dev News

The hosted app: [Dev News](https://dev-news-frontend.netlify.app/)

This repo is for the frontend web app. The repo for the backend API can be found here: [Dev News API](https://github.com/RichardBacon/dev-news-api).

## Description

A mock news and discussion site for developers, inspired by [Reddit](https://www.reddit.com/) and [DEV Community](https://dev.to/).

## Functionality

Users are able to view posts and comments, sort posts, like posts add comments, and delete their own comments.

The user is logged in as a default username.

From the home page the user can view all posts, or all topics.

Selecting a topic will show all posts for that topic.

Posts can be sorted by date posted, number of comments, and number of likes, and can be ordered in descending or ascending order.

Individual posts can be viewed along with their comments. Posts can be liked, and comments can be added and deleted.

Posts and comments are paginated and default to a maximum of 10 per page.

## Getting Started

```bash
git clone https://github.com/RichardJonBacon/dev-news.git
```

### Prerequisites

```
node v12
npm v7
```

### Installing

```
cd dev-news
npm install
```

### Starting The Dev Server

```
npm start
```

## Building A Production Version

```
npm run build
```

## Built With

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Reach Router](https://reach.tech/router)
- [Axios](https://github.com/axios/axios)

## Authors

- **Richard Bacon** - [RichardBacon](https://github.com/RichardBacon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
