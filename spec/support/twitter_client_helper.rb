module TwitterClientHelper
  def set_twitter_client_mock
    client = double(:twitter_client)
    list = double(:list)

    allow(list).to receive(:id).and_return(1)
    allow(list).to receive(:name).and_return('test_name')

    allow(client).to receive(:user_lists).and_return([list])
    expect(TwitterClient).to receive(:new).and_return(client)
  end
end
