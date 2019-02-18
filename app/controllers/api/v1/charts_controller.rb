class Api::V1::ChartsController < Api::V1::BaseController
  def exchange_data
    c1 = Currency.find_by_handle(params[:from])
    c2 = Currency.find_by_handle(params[:to])

    @data = c1.exchanges.to(c2)
  end
end
  