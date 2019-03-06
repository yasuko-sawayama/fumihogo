Product.seed do |product|
  product.id = 1
  product.title = "テストのタイトル"
  product.user_id = 1
  product.description = "テストの説明"
  product.privacy_level = :public_open
end

Page.seed do |page|
  page.id = 1
  page.title = "ページのタイトル"
  page.position = 1
  page.content = <<EOF
「ああ、なるほど。スカートが短ければいいという訳でもないのだな。チラ見せが重要と言う訳か。なるほど奥が深い。なるほど」
　繁華街のショーウィンドウの前で、あいもかわらず素っ頓狂なことを言っている幼なじみに、アルジュナは頭痛を覚えてこめかみを押さえた。あいつは一体何を言っているのだ。
　しかし、今日ばかりはそんなことを突っ込む訳にもいかない。そればかりか、傍から見れば呆れた行動を取っているのは、間違いなくアルジュナの方だろう。頭に血が上っているとはいえ、そのくらいの自覚はあった。
　傍からはあまりそうは思われないことが多いのだが、アルジュナも——カルナほどではないとはいえ——思い立ったら即実行する方である。カルナに、一体何をどう告げればいいのかもわからないまま、
EOF
  page.product_id = 1
end

Page.seed do |page|
  page.id = 2
  page.title = "ページのタイトル"
  page.position = 2
  page.content = <<EOF
本文
EOF
  page.product_id = 1
end