import { CURRENT_USER } from "@/lib/sample-data";

export function WelcomeHeader() {
  return (
    <h1 className="text-h1 font-[380] tracking-tight text-foreground">
      Welcome, {CURRENT_USER.firstName}
    </h1>
  );
}
