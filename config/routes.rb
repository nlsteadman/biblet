Rails.application.routes.draw do

  resources :authors
  resources :booktags
  resources :tags
  resources :books
  resources :reviews
  resources :users
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end