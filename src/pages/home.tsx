import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      {/* 
      <div>
        <aside>
          <h1>Categories</h1>
          <ul>
            {categories.map((i) => (
                <li key={i}>
                  <Link to={`/search?category=${i.toLowerCase()}`}>{i}</Link>
                </li>
              ))}
          </ul>
        </aside>
      </div> */}
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          handler={addToCartHandler}
          productId="dsd"
          name="macboc"
          stock={33}
          price={400}
          // photos={"sss"}
        />
      </main>
    </div>
  );
};

export default Home;
