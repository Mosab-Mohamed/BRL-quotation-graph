import React, { Component } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

import "./line-chart.css";

class LineChart extends Component {
  constructor(props) {
    super(props);

    let { elementWidth, elementHeight } = props;
    this.margin = { top: 30, right: 20, bottom: 30, left: 50 };

    this.x = d3
      .scaleTime()
      .range([0, elementWidth - this.margin.left - this.margin.right]);
    this.y = d3
      .scaleLinear()
      .range([elementHeight - this.margin.top - this.margin.bottom, 0]);
  }

  componentDidMount() {
    const { data } = this.props;
    if (data.length > 0) this.dataFromTSV(data);
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (data.length > 0) this.dataFromTSV(data);
  }

  get xAxis() {
    return d3.axisBottom(this.x).ticks(5);
  }

  get yAxis() {
    return d3.axisLeft(this.y).ticks(5);
  }

  drawXAxis() {
    d3.select(this.refs.x).call(this.xAxis);
  }

  drawYAxis() {
    d3.select(this.refs.y).call(this.yAxis);
  }

  get line() {
    return d3
      .line()
      .x(d => this.x(d3.timeParse("%m/%d/%Y %H:%M:%S")(d.time)))
      .y(d => this.y(d.rate));
  }

  path = () => {
    const { data } = this.props;
    return <path className="line" d={this.line(data)} />;
  };

  dataFromTSV(data) {
    data = data.map(d => ({
      rate: +d.rate,
      time: d3.timeParse("%m/%d/%Y %H:%M:%S")(d.time)
    }));

    this.x.domain(d3.extent(data, d => d.time));
    this.y.domain([
      d3.min(data, d => d.rate) - 0.1,
      d3.max(data, d => d.rate) + 0.1
    ]);
    this.setState({ data: data });
  }

  render() {
    const { data, elementHeight, elementWidth } = this.props;
    return (
      <svg width={elementWidth} height={elementHeight}>
        <g transform={`translate(${this.margin.left}, ${this.margin.top})`}>
          {data ? this.path() : null}

          <g
            ref="x"
            className="x axis"
            transform={`translate(0, ${elementHeight -
              this.margin.top -
              this.margin.bottom})`}
          >
            {data ? this.drawXAxis() : null}
          </g>

          <g ref="y" className="y axis">
            {data ? this.drawYAxis() : null}
          </g>
        </g>
      </svg>
    );
  }
}

LineChart.propTypes = {
  elementWidth: PropTypes.number.isRequired,
  elementHeight: PropTypes.number.isRequired
};

export default LineChart;
