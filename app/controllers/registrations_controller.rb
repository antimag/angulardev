class RegistrationsController < Devise::RegistrationsController
  before_action :get_user, except: [:index, :create]
  respond_to :html, :json

  def update
    if @user.update_attributes(user_params)
      render json: @user.as_json, status: :ok
    else
      render json: {user: @user.errors, status: :unprocessable_entity}
    end
  end

  def destroy
    @user.destroy
    render json: {status: :ok}
  end
  

  private

  def user_params
    params.require(:registration).permit( :email,:username)
  end

  def get_user
    @user = User.find(params[:id])
    render json: {status: :not_found} unless @user
  end
end