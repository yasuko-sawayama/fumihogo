Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }

  resources :products, only: [:index, :show] do
    # for react-router
    get ':any_action', action: :show, on: :member
    resources :pages, controller: 'products'
  end

  namespace :api, { format: :json } do
    namespace :v1 do
      resources :products do
        resources :pages, only: [:show]
      end
    end
  end
end
