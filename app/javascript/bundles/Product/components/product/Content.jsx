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

  constructor(props) {
    super(props);

    this.state={};
    this.fetchContent = this.fetchContent.bind(this);
  }
  
  componentWillMount() {
    // this.fetchContent();
  }
  
  componentWillReceiveProps() {
    this.fetchContent();
  }

  fetchContent() {
    console.log("get content!");
    this.props.fetchPageContent(1,1);
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
