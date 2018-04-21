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

require 'rails_helper'

RSpec.describe MemberPermission, type: :model do
  it { should belong_to(:member).class_name('User') }
  it { should belong_to(:permissions_list) }
end
