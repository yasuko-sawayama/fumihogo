import watchFetchingPage from './pageContentSaga';

export default function* productSaga() {
  yield [
    watchFetchingPage()
  ];
}
