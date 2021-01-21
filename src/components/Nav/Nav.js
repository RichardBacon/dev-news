import React, { Component } from 'react';
import styles from './Nav.module.css';
import { Link } from '@reach/router';
import * as api from '../../utils/api';

class Nav extends Component {
  state = {
    topics: [],
  };

  render() {
    const { topics } = this.state;

    return (
      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <button className={styles.dropBtn}>Topics</button>
          <div className={styles.dropTitle}>Topics</div>
          <div className={styles.links}>
            <ul>
              {topics.map((topic) => {
                const { title } = topic;

                return (
                  <li key={title}>
                    <Link className={styles.link} to={`/topics/${title}`}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default Nav;
