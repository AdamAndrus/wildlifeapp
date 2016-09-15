json.extract! animal, :id, :common_name, :latin_name, :location, :created_at, :updated_at
json.url animal_url(animal, format: :json)
