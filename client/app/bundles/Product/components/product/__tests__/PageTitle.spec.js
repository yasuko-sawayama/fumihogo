import { pageTitle } from "../PageTitle"

describe("ページタイトルを取得", () => {
  const pages = [
    {
      id: 1,
      pageTitle: "さくらさくら",
      info: {},
      auth: {
        update: true,
        read: true,
      }
    },
    {
      id: 2,
      pageTitle: null,
      info: {},
      auth: {
        update: true,
        read: true
      }
    }
  ];

  it("タイトルを取得できること", () => {
    expect(pageTitle(pages, 1)).toEqual("さくらさくら")
  })

  it("タイトルがない場合でもエラーにならないこと", () => {
    expect(pageTitle(pages, 2)).toEqual("")
  })
  // 存在しないページ番号はエラー
})