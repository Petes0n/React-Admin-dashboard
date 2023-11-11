import "./chartbox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  title: string,
  dataKey: string,
  icon: string,
  color: string,
  number: number | string,
  percentage: number,
  chartData: object[],
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
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
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height={100}>
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
        <div className="chart"></div>
        <div className="texts">
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
