module MarkdownHelper
  def markdown(text)
    unless @markdown
      # renderer = Redcarpet::Render::HTML.new(filter_html: true,
      #                                        hard_wrap: true)
      renderer = Redcarpet::ProductPage.new(filter_html: true,
                                            hard_wrap: true)
      @markdown = Redcarpet::Markdown.new(renderer,
                                          autolink: true,
                                          tables: true)
    end

    # rubocop:disable  Rails/OutputSafety
    # @markdown.render(preserve_multi_new_line(text)).html_safe
    @markdown.render(text).html_safe
    # rubocop:enable  Rails/OutputSafety
  end

  # def preserve_multi_new_line(text)
  #   text.gsub(/^$/m, '<br>')
  # end
end
