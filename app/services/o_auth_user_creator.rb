# OAuthでログインした際新規ユーザーを作成する
class OAuthUserCreator
  def initialize(profile, policy)
    @profile = profile
    @policy = policy
  end

  def create_new_user_from_profile
    retry_counter = 0
    profile.user = assign_new_user(policy)

    begin
      profile.user.save!
    rescue ActiveRecord::RecordInvalid => e
      retry_counter += 1
      raise e if retry_counter > 5
      profile.user.nickname = next_nickname(policy, retry_counter)
      retry
    end
  end

  private

  attr_reader :profile, :policy

  def assign_new_user(policy)
    User.find_or_initialize_by(email: policy.email) do |user|
      user.password = Devise.friendly_token[0, 20]
      user.nickname = policy.nickname
      user.confirmed_at = Time.zone.now
    end
  end

  def next_nickname(policy, retry_counter)
    "#{policy.nickname} #{retry_counter}"
  end
end
