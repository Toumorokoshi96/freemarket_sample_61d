class ProductsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :de]
  def index
    @products = Product.limit(10).order('created_at DESC')
    @images = ProductImage.limit(10).order("created_at DESC")
  end

  def edit
  
  end
  
  def new
    
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
    # if @product.seller_id == current_user.id
    @products = Product.find(params[:id])
    @products.destroy
    redirect_to root_path
    # else
      #redirect_to show_products_path(product)
    # end
  end
  
  def show
    @product=Product.find(params[:id])
    @image = ProductImage.find_by(product_id: params[:id])
    @user = User.find_by(id: @product.seller_id)
  end  



  private
  
  def product_image_params
    params.require(:product_image).permit(:product_id, :product_image)
  end

  def product_params
    params[:product][:seller_id] = current_user.id
    # バリデーションエラー回避のため適当なデータ挿入
    params[:product][:size] = 1
    params[:product][:date] = Date.current
    #ダミーデータ挿入終わり
    params.require(:product).permit(:seller_id, :name, :text, :categry, :status, :size, :date, :delivery_fee, :delivery_method, :delivery_from, :estimated_delivery_date, :price, product_images_attributes: [:product_image, :count])
  end
end
