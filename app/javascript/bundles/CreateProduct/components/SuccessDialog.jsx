import React from 'react';
import { Jumbotron, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';

import DisplayGrayWrapper from '../../shared/components/DisplayGrayWrapper';

const Dialog = styled(Jumbotron)`
    background: #fff;
    top: 100px;
    left: 50%;
    top: 50%;
    position: fixed;
    width: 80%;
    height: 300px;
    margin: -150px 0 0 -40%;
p {
font-size: 14px;
}
`;

export default ({ title, description, id }) => {
  const url = `/products/${id}`
  return id ? (
    <DisplayGrayWrapper>
      <div className="container">
        <Dialog>
          <Alert bsStyle="success">
            新しい小説を作成しました！
          </Alert>

          <h2>{title}</h2>
          <p className="description">{description}</p>
          <br />
          <Button href={url} bsStyle="primary">作品を表示</Button>
          {'　'}
          <Button href="#" bsStyle="info">次のページを作成</Button>
          {'　'}
          <Button href="/products/new" bsStyle="default">続けて作成する</Button>
        </Dialog>
      </div>
    </DisplayGrayWrapper>
  ) : false ;
}
