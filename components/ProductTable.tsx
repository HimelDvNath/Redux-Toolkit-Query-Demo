"use client";

import { Product } from "@/rtk/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/rtk/store";
import { setSelectedProductId } from "@/rtk/uiSlice";

interface Props {
  products: Product[];
}

export default function ProductTable({ products }: Props) {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.ui.selectedProductId);

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead className="bg-blue-50 dark:bg-gray-800">
          <tr>
            <th className="p-3 text-left text-gray-900 dark:text-gray-200">Image</th>
            <th className="p-3 text-left text-gray-900 dark:text-gray-200">Title</th>
            <th className="p-3 text-left text-gray-900 dark:text-gray-200">Category</th>
            <th className="p-3 text-left text-gray-900 dark:text-gray-200">Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className={`border-t border-gray-200 dark:border-gray-700 cursor-pointer transition-colors duration-200
                hover:bg-blue-100 dark:hover:bg-gray-900
                ${selectedId === product.id ? "bg-blue-200 dark:bg-blue-800 font-semibold" : ""}
              `}
              onClick={() => dispatch(setSelectedProductId(product.id))}
            >
              <td className="p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-12 w-12 object-contain rounded"
                />
              </td>
              <td className="p-3 text-gray-900 dark:text-gray-200">{product.title}</td>
              <td className="p-3 capitalize text-gray-900 dark:text-gray-200">{product.category}</td>
              <td className="p-3 font-semibold text-gray-900 dark:text-gray-200">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}