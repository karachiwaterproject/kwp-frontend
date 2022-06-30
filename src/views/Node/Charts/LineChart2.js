import React from "react";
import { Line } from "react-chartjs-2";

function utcToDateTime(utcDt, showTime) {
  const utcDt_conv = new Date(utcDt * 1000);

  // check if time is nan
  if (utcDt_conv.getTime() != utcDt_conv.getTime()) {
    return -1;
  } else if (utcDt_conv.getMonth() < 3 && utcDt_conv.getFullYear() < 2021) {
    return utcDt;
  } else {
    if (showTime) {
      return utcDt_conv.toLocaleTimeString();
    }
    return utcDt_conv.toLocaleTimeString();
  }
}

export const LineChart2 = (props) => {
  return (
    <div className="chart-bar-all" style={{ width: "100%" }}>
      {/*<DateTimeComponent />*/}
      {/*console.log('labels: '+props.labels.length.toString() + " data: " + props.data.length.toString())*/}
      <Line
        data={{
          labels: props.labels.map((x) => utcToDateTime(x, props.showTime)),
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
            maxTicksLimit: 1.01,
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
