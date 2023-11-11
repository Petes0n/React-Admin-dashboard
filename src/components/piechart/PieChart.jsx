import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechart.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#FF8042" },
  { name: "Telephone", value: 20, color: "#FFBB28" },
  { name: "Monitor", value: 70, color: "#00C49F" },
];
export default function PieChartBox() {
  return (
    <div className="pieChartBox">
      <h3>Leads by Example</h3>
      <div className="charts">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip 
            contentStyle={{background:"white",borderRadius:"5px"}}/>
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={5}
              dataKey="value"
            >

              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item)=>(
          <div className="option" key={item.name}>
<div className="title">
  <div className="dot" style={{backgroundColor:item.color}}/>
    <span>{item.name}</span>
  </div>
  <span>{item.value}</span>
</div>
         
        ))}
      </div>
    </div>
  );
}
