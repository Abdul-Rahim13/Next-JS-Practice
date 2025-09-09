"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingAnimation from "./LoadingAnimation";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      categoryName: "Electronics",
      imageUrl:
        "https://res.cloudinary.com/di9vpom9l/image/upload/v1756285887/qwiue036y1mc2wjndqpo.jpg",
      href: "/Electronics",
    },
    {
      categoryName: "Furniture",
      imageUrl:
        "https://res.cloudinary.com/di9vpom9l/image/upload/v1756286325/azfipvp6pxehdjrdv4bq.jpg",
      href: "/Furniture",
    },
    {
      categoryName: "Fashion",
      imageUrl:
        "https://res.cloudinary.com/di9vpom9l/image/upload/v1756287250/ey77rowioazopbbthqif.jpg",
      href: "/Fashion",
    },
    {
      categoryName: "Home Appliances",
      imageUrl:
        "https://res.cloudinary.com/di9vpom9l/image/upload/v1756286325/azfipvp6pxehdjrdv4bq.jpg",
      href: "/Home-Appliances",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] py-10 h-[600px]">
      <div className="mx-auto w-[90%] max-w-6xl">

        {loading ? (
          <LoadingAnimation/>
        ) : (
            <>
              <h2 className="text-2xl font-extrabold text-[#111111] mb-6">
              Explore Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((item, i) => (
                  <Link key={i} href={item.href} className="group">
                    <div
                      className="bg-[#F3F2ED] hover:bg-white border border-[#E5E5E5] 
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
                          <span className="px-4 py-1.5 rounded-full bg-[#FEC84B] text-[#111111] text-sm font-semibold">
                            View More
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
          </>
        )}
      </div>
    </div>
  );
}
