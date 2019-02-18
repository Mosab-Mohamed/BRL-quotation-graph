json.exchanges @data do |exchange|
    json.rate exchange.rate
    json.time exchange.created_at.to_i
end