import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '2rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Carrito</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
