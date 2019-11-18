require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :top
end

get '/vests' do
  erb :vests
end

get '/posts' do
  erb :posts
end

get '/vest/:id' do
  @id = params[:id]
  redirect to '/' if @id.size != 3
  erb :vest 
end

get '/*' do
  redirect to '/'
end