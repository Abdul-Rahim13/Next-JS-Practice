import React from "react";
import NotFoundPage from "@/app/not-found";
import parse from "html-react-parser";

export async function generateStaticParams() {
  const category = ["Electronics", "Fashion", "Furniture", "Home-Appliances"];

  return category.map((sub) => ({
    categoryName: sub.toLowerCase(),
  }));
}

async function Page({ params }) {
  const { categoryName } = params;
  let data;

  try {
    const res = await fetch(`https://fa.magma3c.com/category/getAllCategories?category=${categoryName}`);
    data = await res.json();
  } catch (error) {
    return <NotFoundPage />;
  }

  if (!data || !data.success || !data.data) {
    return <NotFoundPage />;
  }

  const subCategories = data.data.subCategory;

  return (
  <div className="p-5 font-sans">
    <h1 className="capitalize text-2xl mb-2">{data.data.categoryName}</h1>

    <p className="text-base text-gray-600 mb-5 leading-relaxed">
         {parse(data.data.description)}
    </p>

    <h2 className="text-xl mb-2">Subcategories:</h2>

    <ul className="flex flex-wrap gap-5 list-none p-0">
        {subCategories.map((sub) => (
        <li
            key={sub.categoryName}
            className="border border-gray-300 rounded-lg p-3 w-[200px] text-center shadow-sm hover:shadow-md transition-shadow"
        >
            <img
            src={sub.imageUrl}
            alt={sub.categoryName}
            className="w-full h-36 object-cover rounded-md mb-2"
            />
            <span className="font-bold block">{sub.categoryName}</span>
        </li>
        ))}
    </ul>
</div>

  );
}

export default Page;
