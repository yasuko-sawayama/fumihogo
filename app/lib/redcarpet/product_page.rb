# Markdownをカスタマイズ
# ルビとダブルダッシュを処理
class Redcarpet::ProductPage < Redcarpet::Render::HTML
  KANJIPAT = "[々〇〻\u3400-\u9FFF\uF900-\uFAFF※ヶ〆]".freeze

  def normal_text(text)
    replace_ruby(text)
    replace_doubledash(text)
  end

  private

  # 青空文庫形式のルビの置換を以下からコード借りて処理
  # https://github.com/takahashim/aozora4reader/blob/master/lib/aozora4reader.rb
  # TODO: まじめにテストすること
  def replace_ruby(text)
    rubyhtml = '<ruby>\1<rp>（</rp><rt>\2</rt><rp>）</rp></ruby>'.freeze

    # 縦棒がある場合
    text.gsub!(/｜(.+?)《(.+?)》/, rubyhtml) if text =~ /｜/
    # 漢字および外字
    text.gsub!(/((?:#{KANJIPAT}|(?:\\UTF\{[0-9a-fA-F]+\}|\\CID\{[0-9]+\}))+?)《(.+?)》/, rubyhtml) if text =~ /(?:#{KANJIPAT}|(?:\\UTF\{[0-9a-fA-F]+\}|\\CID\{[0-9]+\}))+?《.+?》/

    text
  end

  def replace_doubledash(text)
    text.gsub(/——|ーー|――/, '<span style="text-decoration: line-through">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
  end
end
