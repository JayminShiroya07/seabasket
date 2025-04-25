const SkeletonLoader = () => {
  return (
    <>
      {[1, 2, 3, 4].map((_, index) => (
        <div className="flex flex-cl border-2 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-xl">
          <div
            key={index}
            className="flex w-full flex-col bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-md" />
            </div>

            {/* Content Skeleton */}
            <div className="flex flex-col flex-1 p-4 space-y-3">
              {/* Title */}
              <div className="h-4 bg-gray-300 rounded w-3/4" />

              {/* Price and Ratings */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="h-4 bg-gray-300 rounded w-24" />
              </div>

              {/* Buttons */}
              <div className="flex gap-2 flex-wrap">
                <div className="flex-1 h-10 bg-gray-300 rounded-md" />
                <div className="flex-1 h-10 bg-gray-300 rounded-md" />
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
