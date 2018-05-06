const validate = (values) => {
  const errors = {};

  if (values.title && values.title.length > 45) {
    errors.title = 'ページタイトルは45文字以内で入力してください。';
  }
  if (!values.content) {
    errors.content = '本文を入力して下さい。';
  }

  if (values.content && values.content.length < 10) {
    errors.content = '本文は10文字以上で入力して下さい。';
  }

  if (values.content && values.content.length > 30000) {
    errors.content = '本文の長さは3万字以下にしてください。';
  }

  return errors;
};

export default validate;
