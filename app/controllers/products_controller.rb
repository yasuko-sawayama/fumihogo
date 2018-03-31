# 作品のページ表示用
class ProductsController < ApplicationController
  include ReactOnRails::Controller

  def index
    skip_policy_scope
    @products = current_user.products.order(created_at: :desc).page(params[:page])
  end

  def show
    skip_authorization

    @hello_world_props = { product: {
                             title: 'タイトル',
                             description: 'それも翌日至極その鑑定目という気の時をしんで。よほど前で関係界はどうもその建設たましまでを及ぼすといけたをも意味帰ったなかっけれども、ちょっとにもいうなうたませ。顔でいっだ事は何でもかでも今日にいよいよましななけれ。むしろ岡田君に排斥高圧全く講演になった人この例あなたか落第',
                             author: { nickname: 'なまえ', avator: 'http://dummyimage.com/40x40/000/fff' },
                             about: {
                               created_at: '2017/12/21',
                               charactor_count: 200,
                               page_count: 1,
                               privacy_level: 'public'
                             }
                           }
                         }
  end

  def new
    authorize @product = Product.new
  end
end
