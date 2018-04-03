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
    pageTitle: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state={};
    this.fetchContent = this.fetchContent.bind(this);
  }

  componentWillMount() {
    this.fetchContent(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pageId !== nextProps.pageId) {
      this.fetchContent(nextProps.url);
    }
  }

  fetchContent(url) {
    this.props.fetchPageContent(url);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          { this.props.pageTitle && <h3>{this.props.pageTitle}</h3> }
          <Article id="content" dangerouslySetInnerHTML={{__html: this.props.content}} />
        </div>
      </div>
    );
  }
}

export default Content;
