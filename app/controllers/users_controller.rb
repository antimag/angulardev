class UsersController < ApplicationController
  before_action :get_user, except: [:index, :create]
  respond_to :html, :json

  def index
    @user = User.all
    respond_with(@users) do |format|
      format.json { render :json => @user.as_json }
      format.html
    end
  end

  def edit
    respond_with(@user.as_json)
  end

  def show
    respond_with(@user.as_json)
  end
  def profile
    respond_with(@user.as_json)
  end

  private

  def user_params
    params.fetch(:registration, {}).permit(:first_name, :last_name, :email, :phone, :addresses => [:id, :street1, :street2, :city, :state, :country, :zipcode, :_destroy, :user_id])
  end

  def get_user
    @user = User.find(params[:id])
    render json: {status: :not_found} unless @user
  end
end
