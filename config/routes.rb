Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
               omniauth_callbacks: 'users/omniauth_callbacks',
               registrations: 'users/registrations'
             }

  resources :products, except: [:update, :edit, :create] do
    # for react-router
    get ':any_action', action: :show, on: :member
    resources :pages, except: :new, controller: 'products' do
      get :new, action: :show   # React Routerに委譲
    end
  end

  # User
  get '/user/edit', to: 'users#edit'
  resources :users, only: [:show, :update]

  namespace :api, { format: :json } do
    namespace :v1 do
      resources :products do
        resources :pages, only: [:show, :create, :update, :destroy]
      end
    end
  end

  # For Admin Fumihogo
  devise_for :admins
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
end
