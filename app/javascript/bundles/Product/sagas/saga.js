import watchFetchingPage from './pageContentSaga';
import watchFetchingProduct from './productSaga';
import watchPostPage from './pagePostSaga';
import watchUpdateProduct from './productUpdateSaga';

export default function* productSaga() {
  yield [
    watchFetchingPage(),
    watchFetchingProduct(),
    watchPostPage(),
    watchUpdateProduct()
  ];
}
