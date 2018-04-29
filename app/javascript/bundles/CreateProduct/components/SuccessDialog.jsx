import React from 'react';
import { Button, Alert } from 'react-bootstrap';

import DisplayGrayWrapper from '../../shared/components/DisplayGrayWrapper';
import Dialog from '../../shared/components/Dialog';

const SuccessDialog = ({ title, description, id }) => {
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
};

export default SuccessDialog;
