"use client"

import { useGetProductsQuery } from "@/rtk/apiSlice";

export default function Home() {
  const { data: products, isError, isLoading, error } = useGetProductsQuery();
  console.log(products);
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  return (
    null
  );
}