class Death < ApplicationRecord
  validates :record_key_number, uniqueness: true
end
