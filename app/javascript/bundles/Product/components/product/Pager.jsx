import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { join } from '../../../shared/utils/join';

const Pager = ({ previousPage, nextPage, url }) => {
  const Previous = ({ previousPage, url }) => (
    <li className="previous">
      <Link to={join(url, `/pages/${previousPage}`)}>
        <span aria-hidden="true" className="fa fa-backward"></span>
        　
        前のページ
      </Link>
    </li>
  );

  const Next = ({ nextPage, url }) => (
    <li className="next">
      <Link to={join(url, `/pages/${nextPage}`)}>
        次のページ
        　
        <span aria-hidden="true" className="fa fa-forward"></span>
      </Link>
    </li>
  );

  return (
    <ul className="pager">
      { previousPage && <Previous previousPage={previousPage} url={url} /> }
      { nextPage && <Next nextPage={nextPage} url={url} /> }
    </ul>
  );
};

Pager.propTypes = {
  nextPage: PropTypes.number,
  previousPage: PropTypes.number,
  url: PropTypes.string.isRequired,
}

export default Pager;
