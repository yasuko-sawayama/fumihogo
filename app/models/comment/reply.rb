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

class Comment::Reply < ApplicationRecord
  extend Enumerize

  belongs_to :thread,
             class_name: 'Comment::Thread',
             foreign_key: :comment_thread_id,
             inverse_of: :replies
  belongs_to :user, optional: true

  validates :content, length: { maximum: 2000 }, presence: true

    enumerize :privacy_level,
            in: { closed: 0,
                  public_open: 1,
                  author_only: 2 },
            predicate: true,
            scope: true
end
