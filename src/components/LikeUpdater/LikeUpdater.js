import React, { useState } from 'react';
import styles from './LikeUpdater.module.css';
import * as api from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LikeUpdater = ({ post_id, comment_id, updateLikeCount }) => {
  const [userLiked, setUserLiked] = useState(false);

  const handleLikeUpdate = () => {
    const likeIncrement = userLiked ? -1 : 1;

    updateLikeCount(likeIncrement);

    setUserLiked((userLiked) => {
      return !userLiked;
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

      setUserLiked((userLiked) => {
        return !userLiked;
      });
    });
  };

  return (
    <>
      <div className={styles.btns}>
        <button
          className={styles.btn}
          onClick={() => handleLikeUpdate()}
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
};

export default LikeUpdater;
