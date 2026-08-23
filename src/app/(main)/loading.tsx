export default function MainLoading() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 w-1/3 bg-muted rounded" />
      <div className="h-4 w-2/3 bg-muted rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-32 bg-muted rounded-xl" />
        <div className="h-32 bg-muted rounded-xl" />
        <div className="h-32 bg-muted rounded-xl" />
      </div>
      <div className="h-40 bg-muted rounded-xl" />
    </div>
  );
}
