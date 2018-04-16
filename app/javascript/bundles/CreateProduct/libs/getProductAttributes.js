import { getFormValues } from 'redux-form';
import { formValueSelector } from 'redux-form' // ES6
const selector = formValueSelector('new_form');

export default (state) => ({
  product: {
    title: selector(state, 'title'),
    description: selector(state, 'description'),
    privacy_level: selector(state, 'privacy_level'),
    pages_attributes: [{
      title: selector(state, 'pageTitle'),
      content: selector(state, 'content'),
    }],
  },
});

