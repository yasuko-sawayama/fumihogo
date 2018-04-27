# == Schema Information
#
# Table name: member_permissions
#
#  id                  :integer          not null, primary key
#  user_id             :integer
#  permissions_list_id :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_member_permissions_on_permissions_list_id  (permissions_list_id)
#  index_member_permissions_on_user_id              (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (permissions_list_id => permissions_lists.id)
#  fk_rails_...  (user_id => users.id)
#

class MemberPermission < ApplicationRecord
  belongs_to :member,
             foreign_key: 'user_id',
             class_name: 'User',
             inverse_of: :member_permissions
  belongs_to :permissions_list

  validates :user_id, uniqueness: { scope: :permissions_list_id }
end
