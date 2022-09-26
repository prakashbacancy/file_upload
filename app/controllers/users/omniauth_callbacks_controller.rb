# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # You should configure your model like this:
  # devise :omniauthable, omniauth_providers: [:twitter]

  # You should also create an action method in this controller like this:
  # def twitter
  # end

  # More info at:
  # https://github.com/heartcombo/devise#omniauth

  # GET|POST /resource/auth/twitter
  # def passthru
  #   super
  # end

  # GET|POST /users/auth/twitter/callback
  # def failure
  #   super
  # end

  # protected

  # The path used when OmniAuth fails
  # def after_omniauth_failure_path_for(scope)
  #   super(scope)
  # end
  def azure_activedirectory_v2
    response_params = request.env['omniauth.auth']['info']
    ENV['AZURE'] = 'true'
    @user = User.find_or_create_by!(email: response_params['email'])
    
    if @user&.persisted?
      sign_in_and_redirect @user, event: :authentication
    else
      flash[:danger] = 'You have not yet an account!'
      redirect_back(fallback_location: root_path)
    end
  end
end
