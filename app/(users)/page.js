"use client";

export default function Home() {
  // Just hardcode or pass your own items here
  const categories = [
    {
      categoryName: "Electronics",
      imageUrl: "https://res.cloudinary.com/di9vpom9l/image/upload/v1756285887/qwiue036y1mc2wjndqpo.jpg",
    },
    {
      categoryName: "Furniture",
      imageUrl: "https://res.cloudinary.com/di9vpom9l/image/upload/v1756286325/azfipvp6pxehdjrdv4bq.jpg",
    },
    {
      categoryName: "Fashion",
      imageUrl: "https://res.cloudinary.com/di9vpom9l/image/upload/v1756287250/ey77rowioazopbbthqif.jpg",
    },
    {
      categoryName: "Home Appliances",
      imageUrl: "https://res.cloudinary.com/di9vpom9l/image/upload/v1756286325/azfipvp6pxehdjrdv4bq.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-10">
      <div className="mx-auto w-[90%] max-w-6xl">
        <h2 className="text-2xl font-extrabold text-[#111111] mb-6">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, i) => (
            <div
              key={i}
              className="group bg-[#F3F2ED] hover:bg-white border border-[#E5E5E5] 
              hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.categoryName}
                className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#111111] text-center">
                  {item.categoryName}
                </h3>
                <div className="mt-2 flex justify-center">
                  <button className="px-4 py-1.5 rounded-full bg-[#FEC84B] text-[#111111] text-sm font-semibold hover:bg-[#e0b33f] transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
