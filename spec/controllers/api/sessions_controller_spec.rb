require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do

  let!(:user) do
    User.create({
      username: 'Chimamanada',
      password: 'w3should.4llBfeminists!',
      email: 'c.adichie@drexel.edu'
      })
  end

  describe 'POST #create' do
    context 'with invalid credentials' do
      it 'returns user to sign in on non-existent user' do
        post :create, params: {
          user: {
            username: 'Ngozi',
            password: 'w3should.4llBfeminists!'
          }
        }

        expect(response).to have_http_status(401)
      end

      it 'returns user to sign in on bad password' do
        post :create, params: {
          user: {
            username: 'Chimamanada',
            password: 'y3llow5un'
          }
        }

        expect(response).to have_http_status(401)
      end
    end

    context 'with valid credentials' do
      it 'renders json template on success' do
        post :create, format: :json, params: {
          user: {
            username: 'Chimamanada',
            password: 'w3should.4llBfeminists!'
          }
        }

        expect(response).to render_template('api/users/show')
      end

      it 'logs the user in' do
        post :create, format: :json, params: {
          user: {
            username: 'Chimamanada',
            password: 'w3should.4llBfeminists!'
          }
        }

        user = User.find_by_username('Chimamanada')
        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe 'DELETE #destroy' do
    before(:each) do
      post :create, format: :json, params: {
        user: {
          username: 'Chimamanada',
          password: 'w3should.4llBfeminists!'
        }
      }
      chimamanada = User.find_by_username('Chimamanada')
      @session_token = chimamanada.session_token
    end

    it 'logs out the current_user' do
      delete :destroy, format: :json
      expect(session[:session_token]).to be_nil

      chimamanada = User.find_by_username('Chimamanada')
      expect(chimamanada.session_token).not_to eq(@session_token)
    end

    it 'returns an error when no user is logged in' do
      delete :destroy, format: :json
      delete :destroy, format: :json
      expect(response).to have_http_status(404)
    end
  end
end
