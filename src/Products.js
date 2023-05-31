import React, { useRef, memo } from 'react'
import { createPortal } from 'react-dom'
import Product from './Product'
import global_tehnokrat from './data/tehnokrat'
const tehnokrat = global_tehnokrat

const Products = memo(({ inStock, container }) => {
	const products = useRef(JSON.parse(tehnokrat.products)).current

	let alignLeft = true

	return createPortal(products.map((product, i) => {
		const variations = product.variations.filter(variation => {
			return inStock ? variation.in_stock : true
		})

		if (variations.length > 0) {
			alignLeft = !alignLeft

			return <Product
				key={i}
				productIndex={i}
				productName={product.name}
				inStock={inStock}
				variations={variations}
				align={alignLeft ? 'left' : 'right'}
			/>
		}
	})
		,
		container
	)


})

export default Products
