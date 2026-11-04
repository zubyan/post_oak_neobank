"use client";

import { useEffect, useState } from "react";
import { CURRENT_USER } from "@/lib/sample-data";

function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function WelcomeHeader() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // `new Date()` must not run during prerender (Next.js flags it as an
    // unstable value), so the real time is only read after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
  }, []);

  const greeting = getGreeting(now?.getHours() ?? 9);
  const dateLabel = now?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1 className="text-h1 font-[380] tracking-tight text-foreground">
        {greeting}, {CURRENT_USER.firstName}
      </h1>
      <p className="text-sm text-muted-foreground">{dateLabel ?? " "}</p>
    </div>
  );
}
