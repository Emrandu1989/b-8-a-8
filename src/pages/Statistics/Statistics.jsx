
import useDonationData from '../../Hooks/useDonationData';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const {data : donationData} = useDonationData();
    const {localData} = useLocalStorage();
    const data = [
        { name: 'Your Donation', value: localData.length },
        { name: 'Available Donation', value: donationData.length - localData.length },
      ];

      const COLORS = ['#0088FE', '#00C49F'];

      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip"  style={{
            backgroundColor: "#fff",
            border: "1px solid #AAA",
            borderRadius: "50px",
            color:"green",
            margin: "10px",
            padding: "20px"
        }}>
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
          
        </div>
      );
    }
  
    return null;
  };
      
    return (
        <div style={{
            width: "100%",
            height: "80vh"
        }}>
            <ResponsiveContainer >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;