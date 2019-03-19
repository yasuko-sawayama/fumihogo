import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navigation = ({ currentUser }) =>
  console.log(currentUser) || (
    <div className="navigation">
      <ul>
        {currentUser && (
          <li>
            <a href="/products">
              <i className="md-icon">dashboard</i> <span>自分の作品一覧</span>
            </a>
          </li>
        )}

        <li>
          <a href="/likes">
            <i className="md-icon">favorite</i> <span>お気に入り</span>
          </a>
        </li>

        {/* <li> */}
        {/* <NavLink to="/contacts" activeClassName="active"> */}
        {/* <i className="md-icon">view_list</i> <span>閲覧履歴</span> */}
        {/* </NavLink> */}
        {/* </li> */}
      </ul>

      {!currentUser && (
        <div>
          {" "}
          <strong>--</strong>
          <ul>
            <li>
              <a href="/users/sign_in">
                <i className="md-icon">arrow_forward</i> <span>ログイン</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );

Navigation.propTypes = {
  currentUser: PropTypes.shape()
};

Navigation.defaultProps = {
  currentUser: null
};

const mapStateToProps = state => ({
  currentUser: state.currentUserData
});

export default connect(mapStateToProps)(Navigation);
