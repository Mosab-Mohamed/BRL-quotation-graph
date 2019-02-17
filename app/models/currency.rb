class Currency < ApplicationRecord
    validates :handle, presence: true, uniqueness: true
    
    has_many :exchanges, class_name: 'Exchange', foreign_key: 'from_id'
    has_many :to_exchanges, class_name: 'Exchange', foreign_key: 'to_id'
end
