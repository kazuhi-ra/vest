require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :top
end

get '/vests' do
  erb :vests
end

get '/support' do
  erb :support
end

get '/vest/:id' do |number|
  @id = id
  erb :vest 
end

