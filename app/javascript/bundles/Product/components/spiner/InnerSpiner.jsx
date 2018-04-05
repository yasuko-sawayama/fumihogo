import React from 'react';

import styled from 'styled-components';
import ReactLoading from 'react-loading';
import ReactDelayRender from 'react-delay-render';

class InnerSpiner extends React.Component {
  render() {
        const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#E8E8E8;
    opacity: 0.7;
    z-index: 99999;

#loader {
    left: 50%;
    top: 50%;
    position: fixed;
    width: 180px;
    height: 180px;
    margin: -90px 0 0 -90px;
}

`;
    return (<LoaderContainer>
              <div id="loader">
                <ReactLoading type="spinningBubbles" color="white" height="180" width="180" />
              </div>
            </LoaderContainer>);
  }
}

export default ReactDelayRender({ delay: 600, })(InnerSpiner);
