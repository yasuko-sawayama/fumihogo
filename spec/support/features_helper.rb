module FeaturesHelper
  def editor_set_text(text)
    find('.public-DraftEditor-content').send_keys text, :enter
  end
end
