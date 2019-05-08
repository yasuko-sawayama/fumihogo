const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "タイトルを入力してください。";
  } else if (values.title.length > 40) {
    errors.title = "タイトルは40文字以内で入力してください。";
  } else if (values.title.length < 2) {
    errors.title = "タイトルは2文字以上で入力してください。";
  }

  if (values.description && values.description.length > 255) {
    errors.description = "作品の説明は255字以内で入力してください。";
  }

  return errors;
};

export default validate;
