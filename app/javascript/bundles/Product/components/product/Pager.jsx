import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pager = ({ nextPage, previousPage, url }) => {
  const Previous = (previousPage, url) => (
    <li className="previous">
      <Link to={`${url}/pages/${previousPage}`}>
        <span aria-hidden="true" className="fa fa-backward"></span>
        　
        前のページ
      </Link>
    </li>
  );

  const Next = (nextPage, url) => (
    <li className="next">
      <Link to={`${url}/pages/${nextPage}`}>
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
