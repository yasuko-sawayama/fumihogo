import watchFetchingPage from './pageContentSaga';
import watchFetchingProduct from './productSaga';

export default function* productSaga() {
  yield [
    watchFetchingPage(),
    watchFetchingProduct(),
  ];
}
