import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadialBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: this.props.totalLabel,
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
        labels: this.props.labels,
        colors: this.props.colors,
        series: this.props.series,
      },
    };
  }

  render() {
    return (
      <div className="radial-bar-chart">
        <Chart options={this.state.options} series={this.state.options.series} type="radialBar" height={350} />
      </div>
    );
  }
}

export default RadialBarChart;