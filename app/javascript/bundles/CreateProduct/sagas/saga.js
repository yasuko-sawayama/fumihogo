import watchCreateProduct from './createProductSaga';

export default function* productSaga() {
  yield [
    watchCreateProduct()
  ];
}
