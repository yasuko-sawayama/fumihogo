require "rails_helper"

RSpec.describe MarkdownHelper do
  xdescribe "連続空行の処理" do
    it "複数改行が連続した場合<br/>に変換されること" do
      text = <<EOT
改行


改行
EOT
      html = <<EOH
<p>改行<br>
<br>
<br>
改行</p>
EOH
      expect(helper.markdown(text)).to eq(html)
    end
  end

end
