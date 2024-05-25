import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import img2 from "../download.jpeg"

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
// const img2 =
  // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fin%2Fw%2Fmens-black-shohttps://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/468e4793-23a0-4f1d-86f6-150cd6e42ad3/court-vision-low-next-nature-shoes-N2fFHb.pnges-90poyznik1zy7ok&psig=AOvVaw0IDpsGIXRrtoxuQvI0kJGG&ust=1716730453269000&source=images&cd=vfe&opi=89978449&ved=0Chttps://www.google.com/search?sca_esv=5117588ff0c2eced&sca_upv=1&rlz=1C1GCEA_enIN1087IN1087&sxsrf=ADLYWIL80JC9nuKI2a-AH673h103Vkwolg:1716644049843&q=black+shoes&tbm=isch&source=lnms&prmd=sivnmbtz&sa=X&sqi=2&ved=2ahUKEwjauK-29aiGAxUve2wGHS6QB6EQ0pQJegQIEhAB&biw=1536&bih=730&dpr=1.25#imgrc=nHWr_zpDSU9FhMBIQjRxqFwoTCOjV07j1qIYDFQAAAAAdAAAAABAE";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;