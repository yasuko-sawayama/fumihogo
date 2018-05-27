# == Schema Information
#
# Table name: comment_threads
#
#  id               :integer          not null, primary key
#  commentable_type :string
#  commentable_id   :integer
#  closed_at        :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_comment_threads_on_closed_at                            (closed_at)
#  index_comment_threads_on_commentable_type_and_commentable_id  (commentable_type,commentable_id) UNIQUE
#

require 'rails_helper'

RSpec.describe Comment::Thread, type: :model do
  describe 'associations' do
    it { should have_many(:replies) }
    it { should belong_to(:commentable) }
  end
end
