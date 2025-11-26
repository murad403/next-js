"use client"
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const Product = () => {
  const {productId} = useParams();
  // console.log(productId);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  // console.log(product)
  return (
    <div>
      <h1>Product id : {productId}</h1>
      <h1>Product category : {category}</h1>
    </div>
  )
}

export default Product
