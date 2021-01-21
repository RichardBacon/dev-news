import React, { Component } from 'react';
import styles from './VoteUpdater.module.css';
import * as api from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VoteUpdater extends Component {
  state = {
    userVotes: 0,
  };

  render() {
    const { userVotes } = this.state;
    const { votes } = this.props;

    return (
      <>
        <p>votes: {votes + userVotes}</p>
        <div className={styles.btns}>
          <button
            className={styles.upBtn}
            onClick={() => this.handleVoteUpdate(1)}
            disabled={userVotes !== 0}
            aria-label="vote up"
          >
            <FontAwesomeIcon className={styles.upIcon} icon="arrow-circle-up" />
          </button>
          <button
            className={styles.downBtn}
            onClick={() => this.handleVoteUpdate(-1)}
            disabled={userVotes !== 0}
            aria-label="vote down"
          >
            <FontAwesomeIcon
              className={styles.downIcon}
              icon="arrow-circle-down"
            />
          </button>
        </div>
      </>
    );
  }

  handleVoteUpdate = (voteIncrement) => {
    const { post_id, comment_id } = this.props;

    this.setState(({ userVotes }) => {
      return { userVotes: userVotes + voteIncrement };
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

    api.patch(id, voteIncrement, patchType).catch(() => {
      this.setState(({ userVotes }) => {
        return { userVotes: userVotes - voteIncrement };
      });
    });
  };
}

export default VoteUpdater;
