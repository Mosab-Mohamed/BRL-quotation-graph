class Api::V1::BaseController < ActionController::Base
    protect_from_forgery unless: -> { request.format.json? }
    layout 'base'
  
    rescue_from StandardError, with: :error_occurred
  
    private
  
    def error_occurred(exception)
      @message = 'Internal Server Error'
      render 'api/v1/shared/empty', status: :internal_server_error
      p "API ERROR: error => #{exception}, stack trace => #{exception.backtrace.join("\n")}"
    end
  
    def render_unprocessable
      render 'api/v1/shared/empty', status: :unprocessable_entity
    end
  end
  