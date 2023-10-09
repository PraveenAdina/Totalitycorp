import React,{useEffect,useState} from 'react'


import "../styles/Shop.css"
function Shop() {
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart([...cart, item]);
    }
  };

  // Fetch the JSON data from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

   return (
    <div className="menu">
        <h1 className="menuTitle">Our Products</h1>
        <div className="product-grid">
        {product.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} height="200px" width="200px"/>
            <h4>{product.title}</h4>
            <p>Rating: {product.rating.rate}<span className='review'>({product.rating.count} reviews)</span></p>
            <h2>Price: ${product.price}</h2>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Shop;