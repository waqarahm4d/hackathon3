import { ProductsList } from "@/app/utils/mock";
import { Product } from "@/app/utils/types";
import ProductMain from "@/components/ProductMain";
// import { IProduct, ProductsList } from "@/lib/products";
import React from "react";

const getProductDetails = (slug:string) => {
    const res = ProductsList.filter(product => product.slug === slug)
    return res
}

function ProductDetailsPage({params} : {params : {slug:string}}) {
  const productDetails = getProductDetails(params.slug);
  return (
    <div className="product_main">
      {productDetails.map((product: Product) => (
        <ProductMain
          key={product.id}
          id={product.id}
          name={product.name}
          slug={product.slug}
          image={product.image}
          description={product.description}
          category={product.category}
          price={product.price} 
          discounted={product.discounted}
          size={product.size}
          color={product.color}
          qty={product.qty}
        />
      ))}
    </div>
  );
}

export default ProductDetailsPage;
