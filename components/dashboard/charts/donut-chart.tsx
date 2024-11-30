'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { chartConfig } from '@/lib/chart-config';

interface DeliveryStatus {
  name: string;
  value: number;
}

interface DonutChartProps {
  data: DeliveryStatus[];
}

export function DeliveryDonutChart({ data }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart margin={chartConfig.margins}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          {...chartConfig.pie}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${entry.name}`} 
              fill={chartConfig.colors[index % chartConfig.colors.length]}
              stroke="none"
            />
          ))}
        </Pie>
        <Tooltip 
          {...chartConfig.tooltip}
          formatter={(value: number, name: string) => [value.toLocaleString(), name]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}