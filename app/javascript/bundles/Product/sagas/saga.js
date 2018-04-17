import watchFetchingPage from './pageContentSaga';
import watchFetchingProduct from './productSaga';
import watchPostPage from './pagePostSaga';
import watchUpdateProduct from './productUpdateSaga';
import watchUpdatePage from './pageUpdateSaga';

export default function* productSaga() {
  yield [
    watchFetchingPage(),
    watchFetchingProduct(),
    watchPostPage(),
    watchUpdateProduct(),
    watchUpdatePage()
  ];
}
