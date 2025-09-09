"use client";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../loadingAnimation";

export default function BrandsPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://fa.magma3c.com/category/getAllCategories?category=ElecTronics"
        );
        const data = await res.json();
        setCategories(data.data.subCategory || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() =>{
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
      return () => clearTimeout(timer) 
    },[])

  return (
    <div className="w-full bg-[#FAFAFA] py-10">
      <div className="mx-auto w-[90%] max-w-6xl">

        {
          loading ? (
            <div className="h-[600px] flex justify-center items-center">
              <LoadingAnimation />
            </div>

          ): (
            <>
            <h2 className="text-2xl font-extrabold text-[#111111] mb-6">
              Electronics
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
            </>
          )
        }
      </div>
    </div>
  );
}
