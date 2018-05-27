# == Schema Information
#
# Table name: comment_replies
#
#  id                :integer          not null, primary key
#  comment_thread_id :integer
#  content           :text
#  status            :integer          default(1), not null
#  anonymous         :boolean          default(FALSE)
#  user_id           :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_comment_replies_on_comment_thread_id  (comment_thread_id)
#  index_comment_replies_on_status             (status)
#  index_comment_replies_on_user_id            (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (comment_thread_id => comment_threads.id)
#  fk_rails_...  (user_id => users.id)
#

require 'rails_helper'

RSpec.describe Comment::Reply, type: :model do
  describe 'associations' do
    it { should belong_to(:thread) }
    it { should belong_to(:user) }
  end

  describe 'validation' do
    it { should validate_length_of(:content).is_at_most(2000) }
    it { should validate_presence_of(:content) }
    it { should_not validate_presence_of(:user) }
  end
end
