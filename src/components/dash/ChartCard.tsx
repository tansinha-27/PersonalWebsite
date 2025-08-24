import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, BarChart, Bar } from "recharts";

interface ChartCardProps {
  title: string;
  data: any[];
  type?: 'area' | 'line' | 'bar';
  dataKey: string;
  xAxisKey: string;
  height?: number;
}

export function ChartCard({ 
  title, 
  data, 
  type = 'area', 
  dataKey, 
  xAxisKey,
  height = 300 
}: ChartCardProps) {
  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (type) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(224 , 20% ,20%)" />
            <XAxis 
              dataKey={xAxisKey} 
              stroke="hsl(215 20% 65%)"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(215 20% 65%)"
              fontSize={12}
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke="oklch(0.646 0.222 41.116)" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-primary))", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        );
      
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.646 0.222 41.116)" />
            <XAxis 
              dataKey={xAxisKey} 
              stroke="hsl(215 20% 65%)"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(215 20% 65%)"
              fontSize={12}
            />
            <Bar 
              dataKey={dataKey} 
              fill="oklch(0.646 0.222 41.116)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
      
      default:
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.646 0.222 41.116)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="oklch(0.4 0.562 48.3)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey={xAxisKey} 
              stroke="hsl(215 20% 65%)"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(215 20% 65%)"
              fontSize={12}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke="hsl(var(--chart-primary))" 
              fillOpacity={1} 
              fill="url(#colorGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        );
    }
  };

  return (
    <Card className="p-6 bg-dashboard-surface border-dashboard-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}