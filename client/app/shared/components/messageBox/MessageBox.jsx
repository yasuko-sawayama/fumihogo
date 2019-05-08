import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Types, Colors } from "~/shared/constants";
import MessageIcon from "./MessageIcon";

const MessageBox = ({ message }) => {
  const [show, setShow] = useState(true);
  useEffect(() => setShow(true), [message]);

  return (
    message &&
    show && (
      <StyledBox type={message.type}>
        <MessageIcon type={message.type} />
        <Content>{message.content}</Content>
        <Button onClick={() => setShow(false)}>
          <i className="material-icons">close</i>
        </Button>
      </StyledBox>
    )
  );
};

const StyledBox = styled.div`
  background-color: ${props => {
    switch (props.type) {
      case Types.SUCCESS:
        return Colors.SUCCESS;
      case Types.ERROR:
        return Colors.ERROR;
      default:
        return Colors.DEFAULT;
    }
  }};
  margin-top: 30px;
  position: fixed;
  width: auto;
  left: 15px;
  right: 15px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  line-height: 20px;
`;

const Content = styled.span`
  display: inline-block;
  padding-bottom: 5px;
  white-space: pre-wrap;
  width: 75%;
  word-break: break-all;
  margin-right: 3px;
`;

const Button = styled.button`
  float: right;
  color: #fff;
  clear: both;
`;

const mapStateToProps = state => ({
  message: state.message
});
export default connect(mapStateToProps)(MessageBox);
