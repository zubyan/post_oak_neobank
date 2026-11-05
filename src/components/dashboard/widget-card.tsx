import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WidgetCard({
  icon: Icon,
  title,
  href,
  children,
  footer,
}: {
  icon: LucideIcon;
  title: string;
  href: string;
  children: React.ReactNode;
  footer: string;
}) {
  return (
    <Card className="rounded-lg!">
      <CardHeader>
        <CardAction>
          <div className="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
            <Icon className="size-4" />
          </div>
        </CardAction>
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="rounded-b-lg!">
        <Button asChild variant="outline" size="sm" className="w-full rounded-full">
          <Link href={href}>{footer}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
