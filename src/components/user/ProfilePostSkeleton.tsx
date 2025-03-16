export default function ProfilePostSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-8 px-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-[150px] w-[150px] sm:h-[210px] sm:w-[210px] md:h-[300px] md:w-[300px] bg-gray-200 animate-pulse"></div>
      ))}
    </div>
  );
}

