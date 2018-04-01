import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
line-height: 1.8;
font-size: 16px;
letter-spacing: 1px;
`;

class Content extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
  };

  componentWillMount() {
    // 初回呼ばれる・最初のページ切替時も呼ばれる
    console.log("called content mount");
  }
  
  componentWillReceiveProps() {
    // 2回目以降のページ切替時呼ばれる
    console.log("called content prop");
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          { !this.props.pageTitle.match(/^ぺージ\d+/i) && <h3>{this.props.pageTitle}</h3> }
          <Article id="content" dangerouslySetInnerHTML={{__html: this.props.content}} />
        </div>
      </div>
    );
  }
}

export default Content;
