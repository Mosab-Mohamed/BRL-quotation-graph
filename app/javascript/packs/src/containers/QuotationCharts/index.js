import React from "react";
import { Api } from "../../services";

class QuotationCharts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Api.charts.fetchBRLToAUDChartData().then(response => {
      console.log("-----------------------");
      console.log(response.data);
      console.log("-----------------------");
    });
  }

  render() {
    return <div>Hello React</div>;
  }
}

export default QuotationCharts;
