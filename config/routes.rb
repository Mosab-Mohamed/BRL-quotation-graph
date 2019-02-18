Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      scope 'charts' do
        get   'exchange-data'                   , to: 'charts#exchange_data'
      end
    end
  end

  root to: "pages#home"
  get '*path', to: 'pages#home'
end
