const validate = (values) => {
  const errors = {};

  if (!values.content) {
    errors.content = 'ページ本文を入力してください。';
  }
  if (values.content && values.content.length < 10) {
    errors.content = '本文は10文字以上で入力してください。';
  }
  if (values.title && values.title.length > 45) {
    errors.content = 'タイトルは45文字以内で入力してください。';
  }

  return errors;
};

export default validate;
