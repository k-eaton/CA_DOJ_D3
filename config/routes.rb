Rails.application.routes.draw do
  # get 'data/index'
  resources :death do
    collection do

      # Rails doesn't want to use AJAX to serve straight up non-form data.
      # So we force it.

      get 'death_data', :defaults => { :format => 'json' }
    end
  end
  root 'death#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
