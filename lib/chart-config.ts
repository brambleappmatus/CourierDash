export const chartConfig = {
  colors: [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ],
  margins: { 
    top: 10, 
    right: 10, 
    bottom: 10, 
    left: 10 
  },
  xAxis: {
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    stroke: 'hsl(var(--muted-foreground))',
    tickFormatter: String,
  },
  yAxis: {
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    stroke: 'hsl(var(--muted-foreground))',
    width: 40,
    tickFormatter: String,
  },
  tooltip: {
    contentStyle: {
      backgroundColor: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      padding: '12px',
    },
  },
  line: {
    type: 'monotone' as const,
    strokeWidth: 2,
    stroke: 'hsl(var(--primary))',
    dot: { 
      strokeWidth: 2, 
      r: 4 
    },
    activeDot: { 
      r: 6 
    },
  },
  pie: {
    innerRadius: 60,
    outerRadius: 80,
    paddingAngle: 5,
    startAngle: 90,
    endAngle: -270,
    minAngle: 15,
  },
};