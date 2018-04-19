module MetaTagsHelper
  def default_meta_tags
    {
      site: Settings.site.name,
      title: @product.title,
      description: '小説の下書きをしたりするサイトです。', 
      # keywords:         デフォルトページキーワード
      reverse: true,
      canonical: request.original_url,
      og: default_og,
      twitter: default_twitter
    }
  end

  def default_og
    {
      title: :title,
      description: :description,
      type: Settings.site.meta.ogp.type,
      url: request.original_url,
      # image: page_og_image,
      site_name: Settings.site.name,
      locale: 'ja_JP'
    }
  end

  def default_twitter
    {
      card: 'summary',
      site: Settings.site.twitter,
      title: :title,
      description: :description
      # image: {_: image_url(Settings.site[:meta][:og][:image])}
    }
  end

  def page_og_image
    @page_image||image_url(Settings.site.meta.ogp.image_path)
  end

  # ページのINDEX許可条件
  def allow_robots?
    @product&.allow_robots?
  end
end
