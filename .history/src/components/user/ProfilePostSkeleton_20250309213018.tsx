
export default function ProfilePostSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8 px-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-[320px] w-[307px] bg-gray-200 animate-pulse"></div>
      ))}
    </div>
  );
}

