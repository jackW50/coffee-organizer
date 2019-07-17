Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :koffees, only: [:index, :create, :update, :destroy]
  resources :comments, only: [:create, :destroy]
end
