Rails.application.routes.draw do
  devise_for :users, 
           controllers: {                                 
             sessions:           'users/sessions',                                                                             
             omniauth_callbacks: 'users/omniauth_callbacks'                                      
           },
           :path_names => { :sign_up => 'sign_up_test' } 
  root to: 'homes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :documents

end
