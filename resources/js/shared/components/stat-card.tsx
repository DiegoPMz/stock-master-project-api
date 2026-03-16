import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "destructive";
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  variant = "default",
  trend,
}: StatCardProps) {
  const isDestructive = variant === "destructive";

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-colors",
        isDestructive && "border-destructive/30 bg-destructive/5",
      )}>
      <CardContent className="flex items-start justify-between pt-6">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">{title}</p>
          <p
            className={cn(
              "text-3xl font-bold tracking-tight",
              isDestructive ? "text-destructive" : "text-foreground",
            )}>
            {value}
          </p>
          <div className="flex items-center gap-2">
            {trend && (
              <span
                className={cn(
                  "text-xs font-medium",
                  trend.positive ? "text-chart-2" : "text-destructive",
                )}>
                {trend.positive ? "+" : ""}
                {trend.value}
              </span>
            )}
            <p className="text-muted-foreground text-xs">{description}</p>
          </div>
        </div>
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-lg",
            isDestructive
              ? "bg-destructive/10 text-destructive"
              : "bg-primary/10 text-primary",
          )}>
          <Icon className="size-5" />
        </div>
      </CardContent>
    </Card>
  );
}
