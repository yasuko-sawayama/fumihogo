# == Schema Information
#
# Table name: permissions_lists
#
#  id              :integer          not null, primary key
#  twitter_list_id :integer
#  name            :string
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_permissions_lists_on_twitter_list_id  (twitter_list_id)
#  index_permissions_lists_on_user_id          (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

# ユーザー許可リスト
# 現状Twitterのみ対応
class PermissionsList < ApplicationRecord
  belongs_to :user
  has_many :products, dependent: :nullify
  has_many :member_permissions, dependent: :destroy
  has_many :members,
           through: :member_permissions,
           class_name: 'User',
           inverse_of: :added_permissions_lists

  validates :twitter_list_id, presence: true

  def add_member_from_twitter(member_info)
    new_member = User.find_from_twitter_info(member_info)
    if new_member == user || new_member.blank?
      false
    else
      add_member(new_member)
    end
  end

  def allow?(member)
    client = TwitterClient.new
    client.list_member?(list_id: twitter_list_id, user: member)
  end
end
