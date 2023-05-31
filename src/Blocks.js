import React, { useRef, memo } from 'react'
import { createPortal } from 'react-dom'
import ProductCat from './ProductCat'
import global_tehnokrat from './data/tehnokrat'
const tehnokrat = global_tehnokrat

const Blocks = memo(({ inStock, container }) => {
  const products = useRef(JSON.parse(tehnokrat.products)).current
  let all_products = []
  products.forEach(e => {
    Array.prototype.push.apply(all_products, e.variations)
  });

  return createPortal(all_products.map((product, i) => {

    return <ProductCat key={i}
      productIndex={i}
      productName={product.name}
      inStock={inStock}

    />
  })
    ,
    container
  )


})

export default Blocks