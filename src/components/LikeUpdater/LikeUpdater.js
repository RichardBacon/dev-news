import React, { Component } from 'react';
import styles from './LikeUpdater.module.css';
import * as api from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LikeUpdater extends Component {
  state = {
    userLiked: false,
  };

  render() {
    const { userLiked } = this.state;

    return (
      <>
        <div className={styles.btns}>
          <button
            className={styles.btn}
            onClick={() => this.handleLikeUpdate()}
            aria-label="like"
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={userLiked ? ['fas', 'heart'] : ['far', 'heart']}
            />
          </button>
        </div>
      </>
    );
  }

  handleLikeUpdate = () => {
    const { post_id, comment_id, updateLikeCount } = this.props;
    const { userLiked } = this.state;
    const likeIncrement = userLiked ? -1 : 1;

    updateLikeCount(likeIncrement);

    this.setState(({ userLiked }) => {
      return { userLiked: !userLiked };
    });

    let id;
    let patchType;

    if (post_id) {
      id = post_id;
      patchType = 'post';
    }
    if (comment_id) {
      id = comment_id;
      patchType = 'comment';
    }

    api.patch(id, likeIncrement, patchType).catch(() => {
      updateLikeCount(userLiked ? 1 : -1);

      this.setState(({ userLiked }) => {
        return { userLiked: !userLiked };
      });
    });
  };
}

export default LikeUpdater;
