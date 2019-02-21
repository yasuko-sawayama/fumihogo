import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const pageList = (pages, url) =>
  pages.map(page => (
    <tr>
      {/*TODO: 作者用に公開・非公開を表示*/}
      {/*<td className="min-width">*/}
      {/*<div className={"status"}>*/}
      {/*<i className="md-icon">check</i>*/}
      {/*</div>*/}
      {/*</td>*/}

      <td>
        <div className="title-wrapper">
          <div className="title">
            {page.position}.{" "}
            <NavLink to={`${url}/${page.id}`}>{page.title}</NavLink>
          </div>
        </div>
      </td>
      <td>
        <div className="key-value">
          <span>文字数</span>
          <strong>{page.charactorCount}</strong>
        </div>
      </td>
      <td>
        <div className="key-value">
          <span>View</span>
          <strong>{page.impressionCount}</strong>
        </div>
      </td>
      <td>
        <div className="key-value" />
      </td>
    </tr>
  ));

const PageList = ({ pages, match: { url }, history }) => (
  <div className="infobox-header">
    <div className="infobox-header-content page-list">
      <div className="table-responsive">
        <table>
          <thead>
            {" "}
            <tr className="heading">
              <td colSpan={2}>もくじ</td>
              <td className={"close-button"}>
                {" "}
                <i className="material-icons" onClick={() => history.goBack()}>
                  clear
                </i>
              </td>
            </tr>
          </thead>
          <tbody>{pageList(pages, url)}</tbody>
        </table>
      </div>
    </div>
  </div>
);

PageList.propTypes = {
  pages: PropTypes.shape().isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  history: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { pages: state.productData.currentProduct.pages };
}

export default connect(mapStateToProps)(PageList);
