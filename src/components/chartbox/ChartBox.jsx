// Importing the styles for the chart box
import "./chartbox.scss";

// Importing necessary components from external libraries
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

// Defining the type for the props that ChartBox component expects
type Props = {
  title: string,
  dataKey: string,
  icon: string,
  color: string,
  number: number | string,
  percentage: number,
  chartData: object[],
};


// Functional component representing a Chart Box
function ChartBox(props: Props) {
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/products" style={{ color: props.color }}>
          Veiw all
        </Link>
      </div>
      {/* Chart information section */}
      <div className="chartInfo">
        <div className="chart">
              {/* Responsive container for the LineChart */}
          <ResponsiveContainer width="99%" height={100}>
               {/* LineChart with Tooltip and Line components 
               https://recharts.org/en-US/examples/SimpleLineChart
               visit site to learn more about line chart.
               */}
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 80 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
                fill="#FFFFFF"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
           {/* Empty chart div (placeholder) */}
        <div className="chart"></div>
         {/* Text information */}
        <div className="texts">
            {/* Percentage with dynamic color based on positive/negative value */}
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
