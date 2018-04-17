Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }
  resources :users, only: [:show]

  resources :products, only: [:index, :show, :new] do
    # for react-router
    get ':any_action', action: :show, on: :member
    resources :pages, except: [:new], controller: 'products' do
      get :new, action: :show   # React Routerに委譲
    end
  end

  namespace :api, { format: :json } do
    namespace :v1 do
      resources :products do
        resources :pages, only: [:show, :create, :update]
      end
    end
  end
end
