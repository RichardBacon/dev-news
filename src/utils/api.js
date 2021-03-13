import axios from 'axios';

const baseURL =
  process.env.REACT_APP_BASE_URL || 'https://dev-news-api.herokuapp.com/api';

const fetchUsers = () => {
  return axios.get(`${baseURL}/users`).then(({ data: { users } }) => {
    return { users };
  });
};

const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
    return { topics };
  });
};

const fetchPosts = (sort_by, order, topic, page) => {
  return axios
    .get(`${baseURL}/posts`, { params: { sort_by, order, topic, page } })
    .then(({ data: { posts, total_count } }) => {
      return { posts, total_count };
    });
};

const fetchComments = (post_id, page) => {
  return axios
    .get(`${baseURL}/posts/${post_id}/comments`, { params: { page } })
    .then(({ data: { comments, total_count } }) => {
      return { comments, total_count };
    });
};

const fetchPost = (post_id) => {
  return axios.get(`${baseURL}/posts/${post_id}`).then(({ data: { post } }) => {
    return post;
  });
};

const patch = (id, inc_votes, type) => {
  return axios
    .patch(`${baseURL}/${type}s/${id}`, { inc_votes })
    .then(({ data }) => {
      return data[type];
    });
};

const postPost = (newPost) => {
  return axios.post(`${baseURL}/posts`, newPost).then(({ data: { post } }) => {
    return post;
  });
};

const postComment = (post_id, newComment) => {
  return axios
    .post(`${baseURL}/posts/${post_id}/comments`, newComment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

const deletePost = (post_id) => {
  return axios.delete(`${baseURL}/posts/${post_id}`);
};

export {
  fetchUsers,
  fetchTopics,
  fetchPosts,
  fetchComments,
  fetchPost,
  postPost,
  postComment,
  deleteComment,
  deletePost,
  patch,
};
