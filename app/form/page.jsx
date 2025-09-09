import connectMongo from "@/public/lib/mongoose"
import { contactAction } from "./action";

export default function CategoryForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Category</h2>

      <form className="space-y-4" action={contactAction}>
        <div>
          <label className="block mb-1 font-medium" htmlFor="categoryName">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName" 
            placeholder="Electronics"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description" 
            placeholder="Enter category description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
