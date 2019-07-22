Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :koffees do
    resources :comments, only: [:create, :destroy]
  end 

end
