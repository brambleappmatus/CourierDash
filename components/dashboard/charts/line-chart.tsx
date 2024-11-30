'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartConfig } from '@/lib/chart-config';

interface DeliveryData {
  name: string;
  total: number;
}

interface LineChartProps {
  data: DeliveryData[];
}

export function DeliveryLineChart({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={chartConfig.margins}>
        <XAxis 
          {...chartConfig.xAxis}
          dataKey="name"
        />
        <YAxis 
          {...chartConfig.yAxis}
        />
        <Tooltip 
          {...chartConfig.tooltip}
          formatter={(value: number) => [value.toLocaleString(), 'Deliveries']}
        />
        <Line 
          {...chartConfig.line}
          dataKey="total"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}