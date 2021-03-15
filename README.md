# Dev News

The hosted app: [Dev News](https://dev-news-frontend.netlify.app/)

This repo is for the frontend web app.

The repo for the backend API can be found here: [Dev News API](https://github.com/RichardBacon/dev-news-api).

## Description

A mock news and discussion site for developers, inspired by [Reddit](https://www.reddit.com/) and [DEV Community](https://dev.to/).

## Functionality

### Logging in and out

By default the user is logged out and can use the app in a limited, read-only manner.

The dropdown menu in the header can be used to select a user to 'log in' as, actions performed in the app will then be attributed to that user.

To 'log out' the default option an be selected from the dropdown menu.

### Viewing posts

The default starting view for the app is a list of all posts. These can be sorted by date posted, number of comments, and number of likes, in descending or ascending order.

The default view can be returned to at any time by clicking the Home link in the side navigation.

By clicking on a particular topic from anywhere in the app the user will be taken to a view that lists posts just for that topic.

The user is able to click a post title in the list to view an individual post and any additional comments for that post.

### Adding comments and likes

Each post has a form from which users can add comments to the post, and there is a button to 'like' a post.

### Adding posts

The user can add a post at any time by clicking the new post button in the header.

A title and body text for the post can be entered, and a topic selected.

### Deleting comments, likes and posts

Users are able to delete their own posts and comments by using a delete button, and can 'unlike' a post by clicking the like button a second time.

### Viewing topics

The side navigation contains a link that can be used to view a list of all topics and their descriptions. This also provides a way to view all posts in a topic by clicking on the topic title.

## Getting Started

```bash
git clone https://github.com/RichardBacon/dev-news.git
```

### Prerequisites

```
node v12
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
- [React Router](https://reactrouter.com/)
- [Axios](https://github.com/axios/axios)
- [Font Awesome](https://fontawesome.com/)
- [date-fns](https://date-fns.org/)

## Authors

- **Richard Bacon** - [RichardBacon](https://github.com/RichardBacon)

## License

This project is licensed under the MIT License, see the [LICENSE](LICENSE) file for details.
