Rails.application.routes.draw do
  # get 'data/index'
  get 'death/index'
  root 'death#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
