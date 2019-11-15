class ProductsController < ApplicationController

  require 'payjp'


  before_action :authenticate_user!, except: [:index]
  before_action :set_product, only: [:destroy, :show, :my_details, :purchase_confirmation, :buy]

  def index
    @product = Product.where(finished: 0).length
    @products = Product.limit(10).order('created_at DESC')
    @images = ProductImage.limit(10).order("created_at DESC")
    @category_top = Category.where(ancestry: nil).limit(4)
  end

  def new
    @category_parent = Category.where(ancestry: nil)
    @product = Product.new

    10.times { @product.product_images.build }
  end

  def create
    @product = Product.new(product_params)
    #@product.user = current_user

    if @product.save!

      redirect_to :root
    else
      #render :new
    end
  end

  def destroy
    if @product.seller_id == current_user.id
      if @product.destroy
          redirect_to root_path
        else
          redirect_to show_products_path(product)
        end 
    else
      redirect_to show_products_path(product)
    end
  end

  def edit
    @product = Product.find(params[:id])
  end
  
  def show
    @product = Product.find(params[:id])
    @image = ProductImage.find_by(product_id: params[:id])
    @user = User.find_by(id: @product.seller_id)
    @prefecture = Prefecture.find(@product.delivery_from).name
  end  

  def done
    @product = Product.find(params[:id])
  end

  def my_details
    @product = Product.find(params[:id])
    @image = ProductImage.all
    @user = User.all
  end


  def update
    @product = Product.find(params[:id])
      if @product.seller_id == current_user.id
        @product.update!(product_params)
        redirect_to root_path
    end   
  end  

  def my_details
    binding.pry
  end

  def purchase_confirmation
    @product = Product.find(params[:id])
    @images = ProductImage.find_by(product_id: params[:id])
    @users = User.find(current_user.id)
    @users_prefecture = Prefecture.find(@users.address_ken).name
  end


  def buy #クレジット購入
    @product = Product.find(params[:id])
    unless user_signed_in?
      redirect_to registration_users_path
      flash[:alert] = '購入には新規登録が必要です'
    else
      card = Cards.find_by(user_id: current_user.id)
      if card.blank?
        redirect_to action: "new"
        flash[:alert] = '購入にはクレジットカード登録が必要です'
      else
        card = Cards.find_by(user_id: current_user.id)
        Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
        Payjp::Charge.create(
        amount: @product.price, #支払金額
        customer: card.customer_id, #顧客ID
        currency: 'jpy', #日本円
        )
        if @product.update_attribute(:finished, 1)
          @product.update_attribute(:buyer_id, current_user.id)
          redirect_to controller: "products", action: 'done'
        else
          flash[:alert] = '購入に失敗しました。'
          redirect_to controller: "products", action: 'show'
        end
      end
    end
  end
end
  private

  def set_product
    @product = Product.find(params[:product_id])
  end
  
  def product_image_params
    params.require(:product_image).permit(:product_id, :product_image)
  end

  def product_params
    params[:product][:seller_id] = current_user.id
    # バリデーションエラー回避のため適当なデータ挿入
    params[:product][:size] = 1
    params[:product][:date] = Date.current

    params[:product][:child] = params[:child]
    params[:product][:grand] = params[:grand]
    params[:product][:parent] = params[:product][:categry]



    params.require(:product).permit(:seller_id, :name, :text, :categry, :status, :size, :date, :delivery_fee, :delivery_method, :delivery_from, :estimated_delivery_date, :price, :parent, :child, :grand, product_images_attributes: [:product_image, :count])
  end

  def set_product
    @product = Product.find(params[:id])
  end
