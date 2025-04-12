import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { CartContext } from '../context/CartContext'
import '../index.scss'


function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data)
        setError(null)
      })
      .catch(err => setError(`Error: ${err.message}`))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="loading">Cargando detalles del producto...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p className="price"><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Descripción:</strong> {product.description}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductDetails
