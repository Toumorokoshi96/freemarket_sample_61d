class UsersController < ApplicationController
  

  def index
  end

  def show
    @count = Product.where(seller_id: current_user.id).length
  end

  def edit
  end

  def log_out
  end

  def profile
  end
  
  def identification
    @data = Prefecture.all
    @user = current_user
  end

  def failkure
  end

  def progress
    @products = Product.where(seller_id: current_user.id)
    @image = ProductImage.where(product_id: @products.ids)
  end

  
end
