class Exchange < ApplicationRecord
  validates :from_id, :to_id, :rate, presence: true
  
  belongs_to :from_id, class_name: 'Currency'
  belongs_to :to_id, class_name: 'Currency'

  scope :to, ->(currency) { where(to_id: currency) }
end
