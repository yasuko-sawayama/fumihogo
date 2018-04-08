module LoginHelper
  # def login_admin
  #   before(:each) do
  #     @request.env["devise.mapping"] = Devise.mappings[:admin]
  #     admin = FactoryGirl.create(:admin)
  #     # sign_in(scope, resource) if admin is nested in user at factory.
  #     sign_in :user, admin
  #   end
  # end

  def login_user
    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryBot.create(:user)
      sign_in user
    end
  end
end
