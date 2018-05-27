module Commentable
  extend ActiveSupport::Concern

  included do
    has_one :thread,
            class_name: 'Comment::Thread',
            as: :commentable,
            dependent: :destroy
  end

  def comment(content, user = nil, status = 'public_open', anonymous = false)
    current_thread = Comment::Thread.find_or_create_by(commentable: self)
    comment = current_thread.replies
                .create(content: content,
                        user: user,
                        status: status,
                        anonymous: anonymous)
    comment
  end
end
