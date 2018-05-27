require "rails_helper"

shared_examples_for 'commentable' do
  let(:object_name) { described_class.to_s.underscore.to_sym }
  let(:model) { build(object_name) }

  describe "コメントする" do
    it 'コメントできること' do
      p model.comment('テスト').errors
      expect { model.comment('テスト') }.to change(Comment::Reply, :count).by(1)
    end

    it 'コメントがモデル側で参照できること'
  end

  describe "コメントの削除"
  describe "表示範囲"
  describe "匿名のコメント"
end
