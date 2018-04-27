const getProductAttributes = values => ({
  product: {
    title: values.title,
    description: values.description,
    privacy_level: values.privacy_level,
    permissions_list_id: values.privacy_level === 'list' ? values.permissions_list : null,
    pages_attributes: [{
      title: values.pageTitle,
      content: values.content,
    }],
  }
});

export default getProductAttributes;

// export default (state) => ({
//   product: {
//     title: selector(state, 'title'),
//     description: selector(state, 'description'),
//     privacy_level: selector(state, 'privacy_level'),
//     permissions_list_id:selector(state, 'permissions_list'),
//     pages_attributes: [{
//       title: selector(state, 'pageTitle'),
//       content: selector(state, 'content'),
//     }],
//   },
// });

