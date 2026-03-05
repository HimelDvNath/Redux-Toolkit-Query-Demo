"use client";

import { Product } from "@/rtk/apiSlice";

interface Props {
  products: Product[];
}

export default function ProductTable({ products }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-3 text-left text-gray-700 dark:text-gray-200">Image</th>
            <th className="p-3 text-left text-gray-700 dark:text-gray-200">Title</th>
            <th className="p-3 text-left text-gray-700 dark:text-gray-200">Category</th>
            <th className="p-3 text-left text-gray-700 dark:text-gray-200">Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              <td className="p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-12 w-12 object-contain"
                />
              </td>

              <td className="p-3 text-gray-800 dark:text-gray-200">{product.title}</td>

              <td className="p-3 capitalize text-gray-800 dark:text-gray-200">
                {product.category}
              </td>

              <td className="p-3 font-semibold text-gray-800 dark:text-gray-200">
                ${product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}