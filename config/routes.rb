Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'home', to: 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
