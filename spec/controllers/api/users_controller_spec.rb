require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of the user\'s username' do
        post :create, params: {
          user: {
            username: '',
            password: 'virginia22',
            email: 'TheRaven@hotmail.com'
          }
        }
        expect(response).to have_http_status(422)
      end

      it 'validates the presence of the user\'s password' do
        post :create, params: {
          user: {
            username: 'EdgarAllen',
            password: '',
            email: 'TheRaven@hotmail.com'
          }
        }
        expect(response).to have_http_status(422)
      end

      it 'validates the presence of the user\'s email' do
        post :create, params: {
          user: {
            username: 'EdgarAllen',
            password: 'virginia22',
            email: ''
          }
        }
        expect(response).to have_http_status(422)
      end

      it 'validates that the password is at least 6 characters long' do
        post :create, params: {
          user: {
            username: 'EdgarAllen',
            password: 'Poe',
            email: 'TheRaven@hotmail.com'
          }
        }
        expect(response).to have_http_status(422)
      end
    end

    context 'with valid params' do
      it 'logs in the user' do
        post :create, format: :json, params: {
          user: {
            username: 'EdgarAllen',
            password: 'virginia22',
            email: 'TheRaven@hotmail.com'
          }
        }

        user = User.find_by_username('EdgarAllen')
        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end
end
