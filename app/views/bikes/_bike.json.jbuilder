json.extract! bike, :id, :brand, :model, :price, :quantity, :created_at, :updated_at
json.url bike_url(bike, format: :json)
