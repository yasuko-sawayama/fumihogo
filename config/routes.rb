Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
      omniauth_callbacks: 'users/omniauth_callbacks',
      registrations: 'users/registrations'
  }

  # 作品表示
  resources :products, except: [:update, :create] do
    resources :pages, only: :edit, controller: 'products'

    member do
      get :edit

      get 'pages/new', action: :edit

      # for authorization error info
      get :not_authorized

      # for react-router
      get '(/*any_action)', action: :show
    end
  end

  # User
  get '/user/edit', to: 'users#edit'
  resources :users, only: [:show, :update] do
    member do
      get '(/*any_action)', action: :show
    end
  end

  # お気に入り
  resources 'likes', only: :index

  #  API
  namespace :api, { format: :json } do
    namespace :v1 do
      resources :products do
        resources :pages, only: [:show, :create, :update, :destroy]
        resource :likes, only: [:create, :destroy]
      end

      resources :likes, only: :index

      get :current_user_info, controller: :users
    end
  end

  # For Admin Fumihogo
  devise_for :admins
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
end
