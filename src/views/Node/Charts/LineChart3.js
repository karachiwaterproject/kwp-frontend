import React from "react";
import { Line } from "react-chartjs-2";

function utcToDateTime(utcDt, showTime) {
  var date = new Date(utcDt);
  return date.toLocaleString();
}

export const LineChart3 = (props) => {
  return (
    <div className="chart-bar-all" style={{ width: "100%" }}>
      {/*<DateTimeComponent />*/}
      {/*console.log('labels: '+props.labels.length.toString() + " data: " + props.data.length.toString())*/}
      <Line
        data={{
          labels: props.labels.map((x) => utcToDateTime(x)),
          datasets: [
            {
              // received
              type: "line",
              label: props.heading,
              data: props.data,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          animation: {
            duration: 0,
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              min: props.ymin,
              max: props.ymax,
            },
            x: {
              ticks: {
                maxRotation: 0,
                minRotation: 0,
              },
            },
          },
          ticks: {
            maxTicksLimit: 4.5,
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};
