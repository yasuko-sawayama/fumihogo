# 作品のページ表示用
class ProductsController < ApplicationController
  include ReactOnRails::Controller

  def index
    skip_policy_scope
    @products = current_user.products.order(created_at: :desc).page(params[:page])
  end

  def show
    skip_authorization

    @product_props = { product: {
                             id: 1,
                             title: 'タイトル',
                             description: 'それも翌日至極その鑑定目という気の時をしんで。よほど前で関係界はどうもその建設たましまでを及ぼすといけたをも意味帰ったなかっけれども、ちょっとにもいうなうたませ。顔でいっだ事は何でもかでも今日にいよいよましななけれ。むしろ岡田君に排斥高圧全く講演になった人この例あなたか落第',
                             author: { nickname: 'なまえ', avator: 'http://dummyimage.com/40x40/000/fff' },
                             about: {
                               created_at: '2017/12/21',
                               charactor_count: 200,
                               pageCount: 1,
                               privacy_level: 'public'
                             },
                             currentPage: 1,
                             pageInfo: {
                               previousPage: nil,
                               nextPage: 2,
                             },
                             pages: [{
                                       title: '最初のぺージ1',
                                       order: 1,
                                       id: 1,
                                       api: 'http://localhost:3000/api/v1/products/1/pages/1'
                                     },
                                    {
                                       title: 'ページ2',
                                       order: 2,
                                       id: 2,
                                       url: 'http://localhost:3000/api/v1/products/1/pages/1'
                                     }],
                             content: <<EOC
        <p>それも翌日至極その鑑定目という気の時をしんで。よほど前で関係界はどうもその建設たましまでを及ぼすといけたをも意味帰ったなかっけれども、ちょっとにもいうなうたませ。顔でいっだ事は何でもかでも今日にいよいよましななけれ。むしろ岡田君に排斥高圧全く講演になった人この例あなたか落第がというお担任あるたならますが、ある今日は何か自分心にするて、大森さんののが主位の私に実にお相違と云って誰他を小相違を立たようにはなはだご批評が進んたうて、まあいよいよ下宿を用いうでいけた訳を飛びないた。</p>
<p>所のやり方岡田享さんとか、またはこれで参考できて得な個人の頼みへ現われて、発展はさた、私が経過はなりですて変飯ののをやるな偉くたに対してお話しです。どこは奥式ごろ嚢たとはしずますから安心ののの過ぎうでし。と我へは重宝ましのにやっといなと引きたにいうないたのます。というものは場合引き離すがなくっ持ありが、あれも窮屈甲なりにちょっとない出からしまうあるないのべき。</p>
<p>混同のとても自分のあろですば、西洋の自分英熊本という文学はむやみ立派を送ら人たたな。そう立派と考え発起人でたて、また英驚まで道が変った他は教えるんまし。</p>
<p>豆腐がきまらて何は英国目黒へしないのまし。真面目なも上ってほかですば他愛ないを足りまい。</p>
<p>私までむやみないまたそこなど個性をあるたろはむくむく新になかろたなく。</p>
<p>英なりはまあ盲従をは失っですた。それなら私はもっとも無理ましょ事ですは行きですです。気持の非常が掘りという代りの不都合を教育通じように、お力説の本位のがた的道楽がさぞ暮らしているのな。否私の正直の個性がは初めてご免という批評に知れのでしまっです。朝日新聞肴文部省国文部省道先toとかいう危険だろ大森の人は万国家ための講演のものんは悔しくものな。</p>
<p>あなたの変と尊重受けるて病気さているなない自分が聞いで外国を知人ない訳た。それは晩をしてもし通り盲従にありまし。また本当はけっして矛盾にしいるのが這入っんでしょ。</p>
<p>出てしてならのまし。その常雇い足用意をしのたはどうしてもきまってならて、必要に時分の必要が起るようた見当は考えなものない。</p>
<p>けっしてがた意見人料ときなけれようた事にむやみに茫然に飛びように奴婢かもがいうのにいたて、あなたはとにかく自分た。がたにしがも目標をたまらない来と与えれてそれじゃたけれども、いよいよ詩と描いを今日が問題によそよそしいようで。自分が知っれでや、座に始めですたり、それならたくさん考えて運動するれない、午を存在しという主命が行くものか、まるで私は日本家の先刻の高圧をはですようた。</p>
<p>人間を思っ、教授を威圧出けれども胃大名に来るれ、辞令の慣例を道の煮えと出そて、こうよろしゅうある申し上げ。私は馬鹿の間ですから、ともかく過ぎば糧はそれにあるては事業ののを講義さて当るますという安住に進むがしまっものほどしだた。またなおその義務を上げからは心的たのをしです。人の英国家というのも、不推察与えませ考性の活動でしだ他として安泰が信じていようん。しかしそこは何は英に子分を受けという相談がは旨く事ないが、同じく国家人を掘りていた好きは兄弟の高等だはないと縛りつけまし。</p>
<p>あなたの事うはあなたの静粛ましとしに今に考は好いのでしょ。</p>
EOC
                           }
                         }
  end

  def new
    authorize @product = Product.new
  end
end
