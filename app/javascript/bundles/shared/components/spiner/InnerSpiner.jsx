import React from 'react';

import ReactLoading from 'react-loading';
import ReactDelayRender from 'react-delay-render';
import DisplayGrayWrapper from '../DisplayGrayWrapper';

class InnerSpiner extends React.Component {
  render() {
    return (
      <DisplayGrayWrapper>
        <div id="loader">
          <ReactLoading type="spinningBubbles" color="white" height="180" width="180" />
        </div>
      </DisplayGrayWrapper>
    );
  }
}

export default ReactDelayRender({ delay: 600 })(InnerSpiner);
