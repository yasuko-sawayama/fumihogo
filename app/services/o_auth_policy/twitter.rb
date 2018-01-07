# Twitter認証情報処理
class OAuthPolicy::Twitter < OAuthPolicy::Base
  # 一旦このクラスで持ちたいのでABCSizeのチェックをスキップ
  # rubocop:disable Metrics/AbcSize
  def initialize(auth)
    @provider = auth['provider']
    @uid         = auth['uid']
    @name        = auth['info']['name']
    @nickname    = auth['info']['nickname']
    @email       = dummy_email(auth)
    @url         = auth['info']['urls']['Twitter']
    @image_url   = auth['info']['image']
    @description = auth['info']['description'].try(:truncate, 255)
    @credentials = JSON.parse(auth['credentials'].to_json)
    @raw_info    = auth['extra']['raw_info'].to_json
    freeze
  end
  # rubocop:enable Metrics/AbcSize

  private

  def dummy_email(auth)
    "#{auth.uid}-#{auth.provider}@example.com"
  end
end
