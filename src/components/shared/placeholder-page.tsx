export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <h1 className="text-h1 font-[380] tracking-tight text-foreground">{title}</h1>
    </div>
  );
}
