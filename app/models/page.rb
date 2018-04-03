class Page < ApplicationRecord
  belongs_to :product

  acts_as_list scope: :product

  validates :content, presence: true, length: { minimum: 10 }
end
