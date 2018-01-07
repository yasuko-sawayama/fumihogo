# OAuth認証の各プロバイダ別処理　基底クラス
class OAuthPolicy::Base
  attr_reader :provider, :uid, :name, :nickname, :email, :url, :image_url,
              :description, :other, :credentials, :raw_info
end
