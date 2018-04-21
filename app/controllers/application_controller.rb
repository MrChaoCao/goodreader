class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  require 'google/api_client/client_secrets'

  helper_method :current_user, :logged_in?

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def setup_client(access_token = false, refresh_token = false)
    client_options = {
      web: {
        client_id: ENV['GOOGLE_CLIENT_ID'],
        client_secrets: ENV['GOOGLE_CLIENT_SECRET'],
        redirect_uri: ENV['GOOGLE_REDIRECT_URI']
      }
    }
    client_options[:web][:access_token] = access_token if access_token
    client_options[:web][:refresh_token] = refresh_token if refresh_token
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      render json: { base: ['must log in'] }, status: 401
    end
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
end
