import { Card } from "@/components/ui/card";
import { Check, X, AlertTriangle } from "lucide-react";

interface Feature {
  name: string;
  current: 'full' | 'partial' | 'none';
  competitor: 'full' | 'partial' | 'none';
}

interface FeatureComparisonProps {
  title: string;
  features: Feature[];
  currentLabel: string;
  competitorLabel: string;
}

export function FeatureComparison({ 
  title, 
  features, 
  currentLabel, 
  competitorLabel 
}: FeatureComparisonProps) {
  const getIcon = (status: 'full' | 'partial' | 'none') => {
    switch (status) {
      case 'full':
        return <Check className="h-4 w-4 text-success" />;
      case 'partial':
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'none':
        return <X className="h-4 w-4 text-destructive" />;
    }
  };

  return (
    <Card className="p-6 bg-dashboard-surface border-dashboard-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      
      <div className="space-y-4">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground border-b border-dashboard-border pb-3">
          <div>Feature</div>
          <div className="text-center">{currentLabel}</div>
          <div className="text-center">{competitorLabel}</div>
        </div>
        
        {/* Features */}
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 items-center py-3 border-b border-dashboard-border/50 last:border-b-0">
            <div className="text-sm text-foreground">{feature.name}</div>
            <div className="flex justify-center">
              {getIcon(feature.current)}
            </div>
            <div className="flex justify-center">
              {getIcon(feature.competitor)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}