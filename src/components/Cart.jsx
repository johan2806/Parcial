import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <img src={item.image} alt={item.title} style={{ height: '50px', marginRight: '1rem' }} />
                {item.title} - ${item.price} x {item.quantity}
                <button style={{ marginLeft: '1rem' }} onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  )
}

export default Cart
