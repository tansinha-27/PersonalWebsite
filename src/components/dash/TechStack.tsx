import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechItem {
  name: string;
  category: string;
}

interface TechStackProps {
  title: string;
  items: TechItem[];
}

export function TechStack({ title, items }: TechStackProps) {
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <Card className="p-6 bg-dashboard-surface border-dashboard-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, techs]) => (
          <div key={category} className="space-y-3">
            <h4 className="text-sm font-medium text-primary">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-secondary/50 border border-dashboard-border text-foreground hover:bg-primary/10 hover:border-primary/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}