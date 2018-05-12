// URLの最後のスラッシュを削除してURL生成する
export const join = (base, path) => (base.charAt(base.length - 1) === "/"
  ? base.slice(0, -1) + path
  : base + path);
