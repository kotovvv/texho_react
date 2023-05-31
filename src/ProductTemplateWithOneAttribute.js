// phpcs:disable Generic.Formatting
// phpcs:disable Generic.WhiteSpace
// phpcs:disable PEAR.Functions.FunctionCallSignature
// phpcs:disable WordPress

import React, { memo } from 'react'
import ProductImage from './ProductImage'
import MoreDetailed from './MoreDetailed'
import AddToCart from './AddToCart'
import Selectors from './Selectors'
import global_tehnokrat from './data/tehnokrat'
const tehnokrat = global_tehnokrat

const ProductTemplateWithOneAttribute = memo(({
	className,
	firstVariation,
	currentVariation,
	productName,
	productIndex,
	inStock,
	variationsAttributes,
	variationsAttributesTitles,
	selectedAttributesValues,
	select
}) => {
	return <div className={className}>
		<ProductImage
			label={currentVariation ? currentVariation.label : ''}
			imageSrc={currentVariation ? currentVariation.image : firstVariation.image}
			gallery={currentVariation ? currentVariation.gallery : firstVariation.gallery}
		/>
		<div className="description clearfix">
			<div className="title-accses">
				<div className="accses">
					<p className="h4">
						{productName}
						{undefined !== currentVariation && currentVariation.modification && currentVariation.modification.length &&
							<span>{currentVariation.modification}</span>}
					</p>
					<MoreDetailed
						productName={productName}
						productIndex={productIndex}
						currentVariation={currentVariation}
						variationIndex={0}
					// variationIndex={currentVariationID}
					/>
					<div>
						<Selectors
							variationsAttributes={variationsAttributes}
							variationsAttributesTitles={variationsAttributesTitles}
							selectedAttributesValues={selectedAttributesValues.current}
							setSelectedAttributesValues={select}
						/>
						<p className="h6">{tehnokrat.strings['Description']}</p>
						<p>
							<span dangerouslySetInnerHTML={{ __html: currentVariation?.description2 }} />
							<MoreDetailed
								productName={productName}
								productIndex={productIndex}
								currentVariation={currentVariation}
								variationIndex={0}
							// variationIndex={currentVariationID}
							/>
						</p>
					</div>
				</div>

				<AddToCart productName={productName} currentVariation={currentVariation} inStock={inStock} />

			</div>
		</div>
	</div>
})

export default ProductTemplateWithOneAttribute
