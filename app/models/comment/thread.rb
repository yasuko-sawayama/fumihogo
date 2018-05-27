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

class Comment::Thread < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  has_many :replies,
           class_name: 'Comment::Reply',
           foreign_key: :comment_thread_id,
           inverse_of: :thread,
           dependent: :destroy
end
