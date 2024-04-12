import "./Hero.css";
const Hero = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>
          YOUR FEET DESERVE <br /> THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
          <br /> HELP YOU WITH OUR SHOES. YOUR FEET DESERVE
          <br /> THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          <br /> SHOES.
        </p>
        <div className="action-btn">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="third-party">
          <p>Also Available On</p>
          <img
            src="/images/flipkart.png"
            className="thirdparty-store-logo"
            alt="flipcart logo"
          />
          <img src="/images/amazon.png" alt="amazon logo" />
        </div>
      </div>
      <div className="image-class">
        <img src="/images/shoe_image.png" alt="shoe image" />
      </div>
    </main>
  );
};
export default Hero;
