require 'rubygems'
require 'sinatra/base'
require 'haml'
require 'sass'
require 'mongo'

class App < Sinatra::Base

  set :public, File.join(File.dirname(__FILE__), 'public')  
  set :views, File.join(File.dirname(__FILE__), 'views')

  helpers do
    def partial(page, options={})
      haml page, options.merge!(:layout => false)
    end
  end

  get '/styles.css' do 
    content_type 'text/css', :charset => 'utf-8'
    sass :styles
  end

  get '/' do
  end

  post '/database' do
    db = Mongo::Connection.new("flame.mongohq.com", 27020).db("your_database")
    auth = db.authenticate("your_user", "your_password")
    coll = db.collection("your_collection")
    doc = {
      # your data
    }
    coll.insert(doc)
  end

end
