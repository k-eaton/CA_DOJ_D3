Rails.application.routes.draw do
  # get 'data/index'
  resources :death do
    collection do
      get 'race_data'
    end
  end
  root 'death#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
