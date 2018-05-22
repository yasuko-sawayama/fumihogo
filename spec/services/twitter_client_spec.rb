require 'rails_helper'

RSpec.describe TwitterClient, vcr: true do
  let(:twitter) { TwitterClient.new }

  it 'TwitterのリストをID検索できること' do
    list = twitter.client.list(818_095_242_884_714_497)
    expect(list[:name]).to eq('ぷらいべったー')
  end

  describe 'ログインユーザーの所有リスト' do
    let(:user) { create(:user) }
    let(:twitter) do
      TwitterClient.new(user,
                        access_token:  ENV['TWITTER_ACCESS_TOKEN'],
                        access_secret:  ENV['TWITTER_ACCESS_SECRET'])
    end

    it 'リストが取得できること' do
      expect(twitter.user_lists.count).to eq(4)
    end

    it '非公開リストは取得されないこと' do
      expect(twitter.user_lists.select { |list| list.id == 64_651_456 }).to be_empty
    end
  end

  describe 'リストメンバーの確認' do
    subject(:list_member?) { twitter.list_member?(list_id: list_id, user: user) }

    let(:list_id) { 853_249_524_558_581_761 }
    let(:user) { instance_double('User') }

    it 'メンバーが所属していればtrue' do
      allow(user).to receive(:twitter_uid).and_return('83561601')
      expect(list_member?).to be_truthy
    end

    it '所属していなければfalse' do
      allow(user).to receive(:twitter_uid).and_return('tekitounabangou')
      expect(list_member?).to be_falsy
    end
  end
end
