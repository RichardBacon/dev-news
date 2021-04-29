# Dev News

The hosted app: [Dev News](https://dev-news-frontend.netlify.app/)

This repo is for the frontend web app.

The repo for the backend API can be found here: [Dev News API](https://github.com/RichardBacon/dev-news-api).

## Description

A mock news and discussion site for developers, inspired by [Reddit](https://www.reddit.com/) and [DEV Community](https://dev.to/).

## Functionality

### Logging in and out

To 'log in' select a user from the dropdown menu in the header.

To 'log out' select the default option from the dropdown menu.

### Viewing posts

The default view shows a list of all posts. To return to the default view at any time click 'Home' in the navigation.

Posts can be sorted by date posted, number of comments, and number of likes, in descending or ascending order using the dropdown menus.

To view a list of posts filtered by a particular topic click the name of a topic in the navigation or within a post.

To view an individual post click on the title of the post in the list.

### Adding posts

To add a new post click the 'New Post' button in the header. Enter a title and body text for the post and select a topic from the dropdown menu before clicking 'Submit'.

### Adding comments and likes

To add a comment to a post enter the comment text and click 'Submit'.

To like a post click the heart icon.

### Deleting comments and posts

To delete a post or comment, view an individual post and click the 'Delete' button associated with the post or comment to be deleted.

### Viewing topics

To view a list of all topics click 'Topics' in the navigation.

## Development

### Technical Features

- A frontend user interface built with Create React App.

- Fetching, posting and patching data to an API using Axios.

- Error handling.

- Loading spinner.

- Pagination.

#### Dev Tools

- Code formatting with Prettier.

- Linting with ESLint and StyleLint.

#### React

- Use of functional components and React Hooks.

- Use of React context to make user data available without having to pass it through the component tree as props.

- Routing using React Router.

#### Markup

- Semantic HTML.

- HTML Head meta data using React Helmet.

#### Styling

- CSS Modules.

- CSS custom variables.

- Responsive design using media queries.

- Hover effects using media features.

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
