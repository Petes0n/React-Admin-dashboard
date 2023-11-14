import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './bigchart.scss';

// Sample data for the AreaChart
// Would be replaced by API Data;
const data = [
    {
      name: 'Susan',
      Phones: 100,
      Laptops: 100,
      Monitors: 240,
    },
    {
        name: 'Tony',
        Phones: 2000,
        Laptops: 2400,
        Monitors: 200,
    },
    {
        name: 'Julia',
        Phones: 400,
        Laptops: 2400,
        Monitors: 2400,
    },
    {
        name: 'Gem',
        Phones: 200,
        Laptops: 400,
        Monitors: 400,
    },
    {
        name: 'Sophia',
        Phones: 1000,
        Laptops: 200,
        Monitors: 100,
    },
   
  ];
  // Functional component representing a big chart for revenue analytics
function BigChart() {
  return (
     // Container for the big chart
    <div className='bigChart'>
        <h3>Revenue Analytics</h3>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
         
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
           {/* Tooltip for displaying information on hover */}
          <Tooltip />
           {/* Area components for different data series */}
          <Area type="monotone" dataKey="Phones" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Laptops" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Monitors" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
        
    </div>
  )
}

export default BigChart;