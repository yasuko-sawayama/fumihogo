FactoryBot.define do
  factory :page do
    product
    title 'テストタイトル'
    content Faker::Lorem.sentence
  end
end
