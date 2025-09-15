import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    LineChart,
  } from "recharts";
  
  const data = [
    { month: "Jan", income: 3000, growth: 20 },
    { month: "Feb", income: 5000, growth: 40 },
    { month: "Mar", income: 8000, growth: 60 },
    { month: "Apr", income: 3500, growth: -10 },
    { month: "May", income: 7000, growth: 50 },
    { month: "Jun", income: 4500, growth: 30 },
  ];
  
  export default function ChartCard() {
    return (
      <div className="mb-6">
        <h3 className="text-sm mb-2">Income Trend</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#a855f7" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <XAxis dataKey="month" hide />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="growth" stroke="#000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  