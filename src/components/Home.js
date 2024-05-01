

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt="cart"
        />
      </div>
      <h1>Home Component</h1>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/9/DH/UC/UV/18726985/apple-iphone-mobile.png"
            alt="phone"
          />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price : $100.00</span>
        </div>

        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
