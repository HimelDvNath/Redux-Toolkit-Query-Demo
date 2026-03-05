"use client"

import ProductTable from "@/components/ProductTable";
import { useGetProductsQuery } from "@/rtk/apiSlice";

export default function Home() {
  const { data: products, isError, isLoading, error } = useGetProductsQuery();
  
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  return (
     <div className="p-10">
      <ProductTable products={products ?? []} />
    </div>
  );
}