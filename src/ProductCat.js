import AddToCart from './AddToCart'
import Part from './Part'

const ProductCat = ({ product, inStock }) => {
  console.log(product)
  return <div className="product-item">
    <div className="product-cont">
      <span className="pl">Фізична SIM</span>
      <Part part={product.part} partprivat={product.partprivat} />
      <div className="product-img">
        <img className="prod-image"
          src={product.image} />
      </div>
      <a href={product.url}
        className="name">{product.title1}</a>
      <AddToCart productName={product.title1} currentVariation={product} inStock={inStock} />
      {/* <div className="price-buy">
        <a className="buy" href="javascript:void(0)">
          Купити
        </a>
        <div className="sum">
          <p>{product.priceUAH}<span> грн</span></p>
          <span>${product.priceUSD}</span>
        </div>
      </div> */}
      <div className="features">
        <ul>
          <li>
            <span>Серія:</span> iPhone 13
          </li>
          <li>
            <span>Серія:</span> iPhone 13
          </li>
          <li>
            <span>Серія:</span> iPhone 13
          </li>
          <li>
            <span>Серія:</span> iPhone 13
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default ProductCat