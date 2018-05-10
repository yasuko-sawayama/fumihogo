import { CREATE_ERROR, CLEAR_ERROR } from '../constants/createProductConstants';

const errorReducer = (state = null, { type, payload, }) => {
  switch (type) {
  case CREATE_ERROR:
    switch (payload.error.response.status) {
    case 401:
      return ({
        showError: true,
        status: 401,
        title: '権限がありません。',
        message: 'ログアウトしている場合はログインしてください。',
      });
    case 422:
      return ({
        showError: true,
        status: 422,
        title: 'データを確認してください。',
        message: '投稿しようとしている小説のデータが正しくありません。修正してもう一度投稿してください。',
        dataErrors: payload.error.response.data,
      });
    default:
      return ({
        showError: true,
        status: null,
        title: 'エラーが発生しました。',
        message: '画面をリロードしてみてください。解決しない場合は管理者まで御連絡下さい。',
      });
    }
  case CLEAR_ERROR:
    return null;
  default:
    return state;
  }
};

export default errorReducer;
