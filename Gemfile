source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2', '>= 5.2.2.1'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.4.4', '< 0.6.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :production do
  gem 'unicorn', '5.4.1'
end

group :development, :test do
  gem 'capistrano'
  gem 'capistrano-rbenv'
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
  gem 'capistrano3-unicorn'
#----テスト用に長谷川が追加10月31日--------
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'rails-controller-testing'
  gem 'faker'
#----ここまで---------------------------
end

gem 'pry-rails'
gem 'font-awesome-rails'
gem 'kaminari'
gem 'devise'
gem 'fog-aws'


gem 'omniauth-rails_csrf_protection'#外部認証用のgem はせがわ
gem 'omniauth-facebook'#facebookログインのgem はせがわ
gem 'omniauth-twitter'#twitterログインのgem はせがわ
gem 'omniauth-google-oauth2'#グーグルログインのgem 長谷川
gem 'dotenv-rails'#.env用のgem はせがわ
gem 'haml-rails'#hamalのgem  長谷川
gem "jquery-rails"#jqueryを使用するため導入
gem 'active_hash' #フォームのセレクトボックスで使うデータの管理 中島
gem 'carrierwave' #画像アップロードに使用 中島
gem 'mini_magick' #carrierwaveとセットで画像の処理に使用 中島

gem 'active_hash' #フォームのセレクトボックスで使うデータの管理 中島
gem 'gretel'#パンくずのgem 木山

gem 'recaptcha', require: "recaptcha/rails"#ロボットではない認証用のgem 長谷川

gem 'active_hash' #フォームのセレクトボックスで使うデータの管理 中島

# クレジットカード登録用 平田 11/2
gem 'payjp'
# jquery使用 平田 11/2
gem 'jquery-rails'

gem 'roo'#CSV読み込みよう
gem 'ancestry'
gem 'jquery-turbolinks'
gem 'ransack'#検索機能 木山
