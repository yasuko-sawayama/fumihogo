import watchFetchingPage from './pageContentSaga';
import watchFetchingProduct from './productSaga';
import watchPostPage from './pagePostSaga';

export default function* productSaga() {
  yield [
    watchFetchingPage(),
    watchFetchingProduct(),
    watchPostPage(),
  ];
}
