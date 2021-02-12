#!/usr/bin/env ruby

require 'sinatra'
require 'sinatra/cookies'

set :cookie_options, domain: 'localhost', httponly: nil

get '/' do
  File.read('index.html')
end

get '/404' do
  File.read('index.html')
  [404, {}, 'Not Found']
end

post '/login' do
  cookies[:token] = 'fake-auth-token'
  200
end

post '/logout' do
  cookies.clear
  200
end

post '/do-thing' do
  cookies[:token] = 'new-fake-auth-token' if cookies[:token]
  sleep 0.1
  cookies[:token] ? 200 : 401
end
