Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }

  resources :products, only: [:index, :show]

  namespace :api, { format: :json } do
    namespace :v1 do
      resources :products
    end
  end
end
