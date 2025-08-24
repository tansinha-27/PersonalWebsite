import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function MetricCard({ title, value, subtitle, icon: Icon, trend }: MetricCardProps) {
  return (
    <Card className="p-6 bg-black-400 border-3 hover:border-cyan-600 transition-colors">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground text-left">{title}</p>
          <div>
            <div className="text-3xl font-bold text-foreground text-left">{value}</div>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1 text-left">{subtitle}</p>
            )}
          </div>
          {trend && (
            <div className={`text-xs flex items-center gap-1 ${
              trend.isPositive ? 'text-green-300' : 'text-destructive'
            }`}>
              <span>{trend.isPositive ? '↗' : '↘'}</span>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>
        )}
      </div>
    </Card>
  );
}