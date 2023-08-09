'use client'
import { useAppSelector } from "@/app/store/hooks";
import { ProductsList } from "@/app/utils/mock";
import { Product } from "@/app/utils/types";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";

// done using productsMock data from @/app/utils/mock
const getProductsByCategory = (category: string) => {
  const res = ProductsList.filter(product => product.category === category);
  return res
};

function Page({ params }: { params: { slug: string } }) {
  const productByCategory = getProductsByCategory(params.slug);
  // using redux useAppSelector
  // const product = useAppSelector((state) => state.products)
  // const productByCategory = product.filter((product) => product.category == params.slug)
  // console.log(productByCategory[0].image)
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="py-[50px]">
        {productByCategory.length > 0 ? (
          <div>
            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-myBlackHead uppercase scroll-m-20 text-xl font-extrabold tracking-tight 1g:text-2x1">
                {params.slug}
              </h1>
              <div className="flex mt-2 justify-center">
                <div className="w-16 h-1 rounded-full bg-[#0062f5] inline-flex" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
              {
              
              productByCategory.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  slug={product.slug}
                  price={product.price}
                  discounted={product.discounted}
                  category={product.category}
                  description={product.description}
                />
                
              ))
              
              }
            </div>
          </div>
        ) : (
          <div className="no_result text-center w-full h-[50vh]">
            <p className="mb-4 mt-4 text-center">No Products Found</p>
            <Link
              href="/"
              className="bg-black text-white w-[200px] m-auto p-4 rounded block text-center"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
