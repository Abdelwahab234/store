import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../public/styles/cards.css"; // CSS خاص بالصفحة

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    let hideMain= function (){
        (document as any ).querySelector(".section").style.display= "none";
        (document as any ).querySelector(".about-page").style.display= "none";
    }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product:any) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button  onClick={hideMain}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
