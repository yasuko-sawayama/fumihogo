Rails.application.routes.draw do
  root 'home#index'

  get :hello_world, to: 'hello_world#index'

  devise_for :users, controllers: {
      omniauth_callbacks: 'users/omniauth_callbacks',
      registrations: 'users/registrations'
  }

  resources :products, except: [:update, :edit, :create] do
    member do
      # for authorization error info
      get :not_authorized
      # for react-router
      get ':any_action', action: :show
    end

    resources :pages, except: :new, controller: 'products' do
      get :new, action: :show   # React Routerに委譲
    end
  end

  # User
  get '/user/edit', to: 'users#edit'
  resources :users, only: [:show, :update] do
    member do
      get '(/*any_action)', action: :show
    end
  end

  namespace :api, { format: :json } do
    namespace :v1 do
      resources :products do
        resources :pages, only: [:show, :create, :update, :destroy]
      end

      get :current_user_info, controller: :users
    end
  end

  # For Admin Fumihogo
  devise_for :admins
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
end
