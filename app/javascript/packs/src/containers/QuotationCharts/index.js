import React from "react";
import { Api } from "../../services";
import moment from "moment";
import LineChart from "./LineChart";

import QuotationChangeChart from "../../components/QuotationChangeChart";

class QuotationCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { fromCurrency, toCurrency } = this.props;

    Api.charts
      .fetchExchangeChartData({ from: fromCurrency, to: toCurrency })
      .then(response => {
        this.setState({
          data: response.data.exchanges.map(d => ({
            rate: d.rate,
            time: moment.unix(d.time).format("M/D/YYYY h:m:s")
          }))
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    const { fromCurrency, toCurrency } = this.props;
    const nextToCurrency = nextProps.toCurrency;
    const nextFromCurrency = nextProps.fromCurrency;

    if (nextFromCurrency !== fromCurrency || nextToCurrency !== toCurrency) {
      Api.charts
        .fetchExchangeChartData({ from: nextFromCurrency, to: nextToCurrency })
        .then(response => {
          this.setState({
            data: response.data.exchanges.map(d => ({
              rate: d.rate,
              time: moment.unix(d.time).format("M/D/YYYY h:m:s")
            }))
          });
        });
    }
  }

  BRLToUSD = () => {
    const { history } = this.props;
    if (history.location !== "/") history.push("/");
  };

  BRLToEUR = () => {
    const { history } = this.props;
    if (history.location !== "/brl-to-eur") history.push("/brl-to-eur");
  };

  BRLToAUD = () => {
    const { history } = this.props;
    if (history.location !== "/brl-to-aud") history.push("/brl-to-aud");
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <LineChart elementWidth={800} elementHeight={350} data={data} />
        </div>
        <div className="btn-group">
          <button className="button" onClick={this.BRLToUSD}>
            BRL VS USD
          </button>
          <button className="button" onClick={this.BRLToEUR}>
            BRL VS EUR
          </button>
          <button className="button" onClick={this.BRLToAUD}>
            BRL VS AUD
          </button>
        </div>
      </div>
    );
  }
}

export default QuotationCharts;
