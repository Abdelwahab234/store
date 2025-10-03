import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./../../public/styles/ProductDetails.css"; // CSS خاص بالصفحة

export default function ProductDetails() {
  const { id } = useParams();
  const [product , setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  let showman  = function(){
    (document.querySelector(".section") as any).style.display ="flex";
    (document.querySelector(".about-page") as any).style.display ="flex";
  } 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Product not found</p>;

  return (
    <div className="product-details-page" id="product-details-page">
      <h1>{(product as any ).title}</h1>
      <img src={(product as any ).image} alt={(product as any ).title} className="product-image" />
      <p className="price">${(product as any ).price}</p>
      <p className="description">{(product as any ).description}</p>
      <Link to="/">
        <button  onClick={showman}className="back-button">Add to Card</button>
        <button onClick={showman}className="back-button">Back to Products</button>
      </Link>
    </div>
  );
}
