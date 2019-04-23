import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Types, Colors } from "~/shared/constants";

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
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
`;

const MessageBox = ({ message }) => {
  return (
    message && <StyledBox type={message.type}>{message.content}</StyledBox>
  );
};

// アップデートの成功を表示
// TODO: フォームのエラーを表示
const mapStateToProps = state => ({
  message: state.message
});
export default connect(mapStateToProps)(MessageBox);
