export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto h-full p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 h-[200px] bg-surface rounded-3xl animate-pulse" />
        <div className="col-span-1 h-[200px] bg-surface rounded-3xl animate-pulse" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-span-1 h-[180px] bg-surface rounded-3xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}
