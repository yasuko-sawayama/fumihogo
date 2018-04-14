const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "タイトルを入力してください。";
  }
  // if (!values.description) {
  //   errors.description = "概要を入力して下さい。"
  // }
  if (values.description && values.description.length > 200) {
    errors.description = "概要は200文字以内で入力して下さい。";
  }
  if (!values.editorText) {
    errors.editorText = "本文を入力して下さい。";
  }
  if (values.editorText && values.editorText.length < 10) {
    errors.editorText = "本文の長さは10文字以上にしてください。";
  }

  return errors;
};

export default validate;
