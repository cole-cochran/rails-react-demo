Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'bikes/index'
      post 'bikes/create'
      delete 'bikes/:id', to: 'bikes#destroy'
    end
  end

  root 'bikes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

