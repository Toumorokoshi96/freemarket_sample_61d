class UsersController < ApplicationController
  

  def index
  end

  def show
  end  

  def profile
  end

  def identification
    @data = Prefecture.all
    @user = current_user
  end

  def progress
    @products = Product.all
  end

  def my_details
    @product = Product.find(params[:id])
  end

  

  
end
