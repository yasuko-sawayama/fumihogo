import React from "react";
// import PropTypes from "prop-types";
import Responsive from "~/shared/components/layouts/responsive.jsx";
import Form from "./editor/EditorForm";

function Editor() {
  // TODO: ページ単位で編集できる
  // TODO: ページ間の移動ができる
  // TODO: 表示画面のページを引き継ぐ
  return (
    <Responsive>
      <Form />
    </Responsive>
  );
}

export default Editor;
