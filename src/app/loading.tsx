export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-2/3 bg-muted rounded" />
          <div className="h-10 w-1/2 bg-muted rounded" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-32 bg-muted rounded-xl" />
            <div className="h-32 bg-muted rounded-xl" />
            <div className="h-32 bg-muted rounded-xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-40 bg-muted rounded-xl" />
            <div className="h-40 bg-muted rounded-xl" />
            <div className="h-40 bg-muted rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
