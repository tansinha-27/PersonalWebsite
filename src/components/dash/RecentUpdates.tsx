import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface Update {
  type: 'bug' | 'improvement' | 'feature';
  title: string;
  description: string;
  date: string;
  projectLink?: string;
  blogLink?: string;
}

interface RecentUpdatesProps {
  title: string;
  updates: Update[];
}

export function RecentUpdates({ title, updates }: RecentUpdatesProps) {
  const getTypeBadge = (type: Update['type']) => {
    const variants = {
      bug: { variant: 'destructive' as const, label: 'Bug Fix' },
      improvement: { variant: 'secondary' as const, label: 'Improvement' },
      feature: { variant: 'default' as const, label: 'Feature' }
    };
    
    const config = variants[type];
    return (
      <Badge variant={config.variant} className="text-xs">
        {config.label}
      </Badge>
    );
  };

  return (
    <Card className="p-6 bg-dashboard-surface border-dashboard-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="border-l-2 border-primary/20 pl-4 py-2">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-2">
                {getTypeBadge(update.type)}
                <span className="text-xs text-muted-foreground">{update.date}</span>
              </div>
            </div>
            <h4 className="text-sm font-medium text-foreground mb-1">{update.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2">{update.description}</p>
            {(update.projectLink || update.blogLink) && (
              <div className="flex items-center gap-3">
                {update.projectLink && (
                  <a
                    href={update.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-3 w-3" />
                    Project
                  </a>
                )}
                {update.blogLink && (
                  <a
                    href={update.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Blog Post
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}