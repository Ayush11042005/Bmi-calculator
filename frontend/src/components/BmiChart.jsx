import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea
} from 'recharts';

const BmiChart = ({ records }) => {
  if (!records || records.length === 0) {
    return (
      <div className="glass-card p-8 flex items-center justify-center h-64 border border-white/10">
        <p className="text-gray-400">No data available yet. Add a record to see your chart!</p>
      </div>
    );
  }

  const chartData = [...records].reverse().map(record => ({
    date: new Date(record.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    bmi: record.bmiValue,
    weight: record.weightKg,
  }));

  return (
    <div className="glass-card p-6 border border-white/10 w-full mb-8 animate-fade-in-up">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
        Progress Timeline
      </h3>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="date" stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} tickMargin={10} />
            <YAxis yAxisId="left" domain={['auto', 'auto']} stroke="#818CF8" tick={{ fill: '#9CA3AF' }} width={40} />
            <YAxis yAxisId="right" orientation="right" domain={['auto', 'auto']} stroke="#10B981" tick={{ fill: '#9CA3AF' }} width={40} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.5rem', color: '#fff' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <ReferenceArea yAxisId="left" y1={18.5} y2={24.9} fill="url(#colorHealthy)" fillOpacity={0.1} />
            
            <defs>
              <linearGradient id="colorHealthy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="bmi"
              name="BMI"
              stroke="#818CF8"
              strokeWidth={3}
              dot={{ fill: '#818CF8', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="weight"
              name="Weight (kg)"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BmiChart;
