import AddToCart from './AddToCart'
import Part from './Part'
import global_tehnokrat from './data/tehnokrat'
const tehnokrat = global_tehnokrat

const ProductCat = ({ product, inStock }) => {
  const variationsAttributesTitles =
    Array.isArray(product.description2)
      ? product.description2.filter((title, index) => (index % 2 === 0))
      : [tehnokrat.strings['color']]
  const attributes = product.title2.substr(1, product.title2.length - 2).split('|')
  return <div className="product-item">
    <div className="product-cont">
      {product.label.length > 0 &&
        <span className="pl" style={{ backgroundColor: tehnokrat.label_colors[product.label] }}>{product.label}</span>
      }
      <Part part={product.part} partprivat={product.partprivat} />
      <div className="product-img">
        <img className="prod-image"
          src={product.image} alt={product.title1} />
      </div>
      <a href={product.url}
        className="name">{product.title1}</a>
      <AddToCart productName={product.title1} currentVariation={product} inStock={inStock} />

      {attributes.length > 0 ?
        <div className="features">
          <ul>
            {
              attributes.map((el, idx) => {
                return <li key={idx}>
                  <span>{variationsAttributesTitles[idx]}</span>{el}
                </li>
              })
            }
          </ul>
        </div>
        : ''}

    </div>
  </div >
}

export default ProductCat