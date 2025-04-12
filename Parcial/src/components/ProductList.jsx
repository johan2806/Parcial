import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => setError('Error al cargar los productos'))
  }, [])

  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Productos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.image} alt={product.title} style={{ height: '100px', objectFit: 'contain' }} />
              <h4>{product.title}</h4>
              <p><strong>${product.price}</strong></p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
