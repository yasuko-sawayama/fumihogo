import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { join } from '../../../shared/utils/join';

const Previous = ({ previousPage, url }) => (
  <li className="previous">
    <Link
      to={join(url, `/pages/${previousPage.id}`)}
      title={previousPage.title}
    >
      <span aria-hidden="true" className="fa fa-backward" />

      前のページ
    </Link>
  </li>
);


const Next = ({ nextPage, url }) => (
  <li className="next">
    <Link
      to={join(url, `/pages/${nextPage.id}`)}
      title={nextPage.title}
    >
      次のページ

      <span aria-hidden="true" className="fa fa-forward" />
    </Link>
  </li>
);


const Pager = ({ previousPage, nextPage, url }) => (
  <ul className="pager">
    { previousPage && <Previous previousPage={previousPage} url={url} /> }
    { nextPage && <Next nextPage={nextPage} url={url} /> }
  </ul>
);

Pager.propTypes = {
  nextPage: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }),
  previousPage: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }),
  url: PropTypes.string.isRequired
};

export default Pager;
