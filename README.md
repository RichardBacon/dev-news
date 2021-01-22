# Dev News

[Dev News](https://dev-news-frontend.netlify.app/)

A mock news and discussion site for developers.

This repo is the frontend web app. The backend API and database the fan be found here: [Dev News API](https://github.com/RichardJonBacon/dev-news-api).

Users are able to view posts and comments, sort posts, vote posts and comments up and down, add comments, and delete comments.

The user is logged in as a default username.

From the home page the user can view all posts, or choose to view posts by a particular topic.

Posts can be sorted by date posted, number of comments, and number of votes, and can be ordered in descending or ascending order.

Individual posts can be viewed along with their comments. Posts and comments can be voted up or down, and comments can be both added and deleted.

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

- **Richard Bacon** - [RichardJonBacon](https://github.com/RichardJonBacon)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
