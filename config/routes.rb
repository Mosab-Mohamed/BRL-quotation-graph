Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      scope 'charts' do
        get   'brl-to-eur'                   , to: 'charts#brl_to_eur'
        get   'brl-to-usd'                   , to: 'charts#brl_to_usd'
        get   'brl-to-aud'                   , to: 'charts#brl_to_aud'
      end
    end
  end

  root to: "pages#home"
end
